// Required modules
const userModel = require('../models/userModel');
const nodemailer = require("nodemailer"); // For sending emails (if needed)
const express = require('express'); // Express framework
const cors = require('cors'); // Enable CORS (Cross-Origin Resource Sharing)
const Jwt = require('jsonwebtoken'); // For JSON Web Token (JWT) authentication
const dotenv = require('dotenv'); // For environment variable management
// Multer setup for file uploads (in memory storage)
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); // Store uploaded files in memory

// User registration controller
exports.registerController = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password, role } = req.body;

        // Ensure all required fields are provided
        if (!username || !email || !password || !role) {
            return res.status(400).send({
                success: false,
                message: "OOPS!! All fields are required."
            });
        }

        // Check if the user already exists in the database
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: 'User already exists!!'
            });
        }

        // Create a new user instance and save it to the database
        const user = new userModel({ username, email, password, role });
        await user.save();

        // Generate JWT token for user authentication
        Jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                return res.send({ result: "Something went wrong, please try again later." });
            }
            return res.status(201).send({
                user,
                auth: token,
                success: true,
                message: 'Registered Successfully',
            });
        });
    } catch (error) { // Handle errors
        console.log(error);
        return res.status(500).send({
            message: 'Error in Register callback',
            success: false,
            error
        });
    }
};

// Fetch all users controller
exports.getALLUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: 'All user data',
            users
        });
    } catch (error) { // Handle errors
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Getting All Users',
            error
        });
    }
};

// User login controller
exports.loginController = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please enter email and password."
            });
        }

        // Check if the user exists in the database
        const user = await userModel.findOne({ email });

        if (!user) { // If user does not exist
            return res.status(404).send({
                success: true,
                message: 'Email is not registered.'
            });
        }

        // Verify password (assuming `verifyPasswordSync` checks password)
        const valid = user.verifyPasswordSync(password);
        if (!valid) { // If password is incorrect
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password.',
            });
        }

        // If credentials are correct, generate JWT token
        if (user && valid) {
            Jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    return res.send({ result: "Something went wrong, please try again later." });
                }

                // Send user data and authentication token
                return res.status(200).send({
                    success: true,
                    message: 'Login Successfully',
                    user,
                    data: {
                        userid: user._id,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        address: user.address,
                        about: user.about,
                        phone: user.phone,
                    },
                    auth: token
                });
            });
        }
    } catch (error) { // Handle errors
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in login callback',
            error
        });
    }
};

// Get single user data based on user ID
exports.getuser = async (req, res) => {
    const userid = req.headers['userid']; // Retrieve user ID from request headers

    try {
        const user = await userModel.findOne({ _id: userid });

        if (user) { // If user found, send user data
            return res.status(200).send({
                success: true,
                data: {
                    userid: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    address: user.address,
                    about: user.about,
                    phone: user.phone
                },
            });
        }

        // If user not found, return 404
        res.status(404).send({ success: false });
    } catch (err) { // Handle errors
        res.status(500).send({ success: false, error: "Internal Server Error" });
    }
};

// Get user profile photo
exports.getprofilephoto = async (req, res) => {
    try {
        const email = req.headers['email']; // Retrieve email from request headers

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // If user has a profile photo, send it
        if (user.profilePhoto && user.profilePhoto.data) {
            res.contentType(user.profilePhoto.contentType);
            return res.send(user.profilePhoto.data);
        }

        // Fallback: redirect to a default profile image
        return res.redirect('https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
    } catch (error) {
        console.error('Error fetching user image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for uploading a profile photo
exports.uploadImage = async (req, res, next) => {
    try {
        const email = req.headers['email']; // Retrieve email from request headers
        console.log(email)
        // Find user by email
        const user = await userModel.findOne({ email });
        console.log(user)

        // Prepare the profile photo data from the file buffer
        const obj = {
            profilePhoto: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        };

        if (user) {
            // Update user profile photo or retain the existing one
            user.profilePhoto = obj.profilePhoto || user.profilePhoto;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        // Respond with success message
        res.status(200).json({
            success: true,
            message: "Profile Photo updated successfully",
            updatedUser,
            data: {
                userid: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
                address: updatedUser.address,
                about: updatedUser.about,
                phone: updatedUser.phone,
            },
        });
    } catch (err) { // Handle errors
        console.error(err);
        res.status(500).send('Error while uploading the image');
    }
};

// Update user details controller
exports.updateUser_Controler = async (req, res) => {
    try {
        const email = req.headers['email']; // Retrieve email from request headers

        // Find user by email
        const user = await userModel.findOne({ email: email });

        if (!user) { // If user not found
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user data with new values from request body
        if (user) {
            user.username = req.body.username || user.username;
            user.phone = req.body.phone || user.phone;
            user.address = req.body.address || user.address;
        }

        // Save the updated user data
        const updatedUser = await user.save();

        // Respond with success and updated user data
        res.status(200).json({
            success: true,
            message: "User data updated successfully",
            data: {
                userid: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
                address: updatedUser.address,
                about: updatedUser.about,
                phone: updatedUser.phone
            },
        });
    } catch (err) { // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// delete user

exports.deleteUser = async (req, res) => {
    const objectId = req.headers['userid']; // Retrieve email from request headers
    // Find user by email
    // const user = await userModel.findOne({ email: email });

    try {
        // Find the user by ID and delete
        const deletedUser = await userModel.findByIdAndDelete({ _id: objectId });
        console.log(deletedUser)
        // Check if user was found and deleted
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // If deletion is successful
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error while deleting user",
        });
    }
};

// OTP Mail Sending
const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

exports.OTPController = async (req, res) => {
    try {

        //Fetchig variables for required to send otp
        const { email, OTP, procedure } = req.body;

        //Checking if user has entered mailId or not
        if (!email) {
            return res.status(200).send({
                success: false,
                message: "Please Enter Your Email"
            })
        }

        // Checking if user already exists
        const user = await userModel.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'Email is not registered.'
            })
        }

        //Creating transporter for sending mail
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            tls: true,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: process.env.MY_EMAIL, // sender address
                to: email,                  // receiver
                subject: procedure, // Subject line
                html: `<!DOCTYPE html>
                  <html lang="en" >
                  <head>
                    <meta charset="UTF-8">
                    <title>OTP Email Template</title>
                    
                  
                  </head>
                  <body>
                  <!-- partial:index.partial.html -->
                  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                    <div style="margin:50px auto;width:70%;padding:20px 0">
                      <div style="border-bottom:1px solid #eee">
                        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">BookRaze</a>
                      </div>
                      <p style="font-size:1.1em">Hi,</p>
                      <p>Thank you for choosing BookRaze. Use the following OTP to complete your Password. OTP is valid for 5 minutes</p>
                      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
                      <p style="font-size:0.9em;">Regards,<br />BookRaze</p>
                      <hr style="border:none;border-top:1px solid #eee" />
                      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                        <p>BookRaze</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>
                  <!-- partial -->
                    
                  </body>
                  </html>`,
            });

            console.log("Message sent: %s", info.messageId);

        }

        main().catch(console.error);
        return res.status(200).send({
            success: true,
            message: 'Mail sent. Check your inbox.'
        })

    } catch (error) {
        // Code to handle errors
        console.log(error)
        return res.status(500).send({
            message: 'Error in mail callback',
            success: false,
            error
        })
    }
}

// Controller to update password in database
exports.updatePassword = async (req, res) => {

    try {
        //fetching details mail id and new password form frontend
        const { email, password } = req.body;

        //Checking if user has entered password or not
        if (!password) {
            return res.status(401).send({
                success: false,
                message: "Enter new password."
            })
        }

        //finding user 
        const user = await userModel.findOne({ email })

        //updating new password
        await user.updateOne({
            email: email,
            $set: { password: hashedPassword }
        });

        console.log("Password updated successfully");
        await user.save()    //Saving updated password
        return res.status(201).send({
            success: true,
            message: 'Password updated successfully',
            user
        })

    } catch (error) {    //Handling errors
        console.log(error);
        return res.status(500).send({
            message: 'Error in Register callback',
            success: false,
            error
        })
    }
}
