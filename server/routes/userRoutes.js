const express = require('express');
const { getALLUsers, registerController, loginController, OTPController, updatePassword, getuser, updateUser_Controler, uploadImage, getprofilephoto, deleteUser } = require('../controllers/userController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
// router object 
const router = express.Router();

//get all users || get 
router.get('/all-users', getALLUsers)

//get one user 
router.get('/getuser', getuser)

// creat user || post
router.post('/register', registerController)

// update user
router.put('/updateuser', updateUser_Controler)

// update profilephoto route
router.put('/profilePhoto', upload.single('avatar'), uploadImage)

router.get('/profilePicture', getprofilephoto)

router.delete("/delete", deleteUser);

// login || post 
router.post('/login', loginController)

// recover password
router.post('/send_recovery_email', OTPController)

// updatePassword route
router.post('/updatePassword', updatePassword)

module.exports = router