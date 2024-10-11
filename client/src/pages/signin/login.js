import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    // Eye icon paths for password visibility toggle
    const eyeOpen = "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z";
    const eyeClosed = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z";
    const [eyeIcon, setEyeIcon] = useState(eyeClosed);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        setEyeIcon(showPassword ? eyeClosed : eyeOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password) {
            toast.error("Please fill in both fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            const { data } = await axios.post("/api/v1/user/login", {
                email: inputs.email,
                password: inputs.password,
            });

            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.data));
                localStorage.setItem("token", data.auth);
                localStorage.setItem("isLogin", true);
                toast.success(data.message);
                navigate("/profile");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Login failed. Please try again.");
            console.error("Error during login:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleForgotPassword = async (e) => {
        try {
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            const { data } = await axios.post("/api/v1/user/send_recovery_email", {
                email: inputs.email,
                OTP,
                procedure: "Password Recovery",
            });

            if (data.success) {
                toast.success(data.message);
                navigate("/OTPInput", { state: { recp_email: inputs.email, Otp: OTP } });
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Error sending recovery email.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative">
            <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/z/collage-displaying-rich-cultural-heritage-india-vector-illustration-75632523.jpg')] opacity-30 bg-cover bg-center"></div>
            <div className="bg-white p-8 rounded-lg shadow-md relative z-10 max-w-sm w-full">
                <h2 className="text-center text-2xl font-bold mb-4">Sign in to Our Culture</h2>
                <p className="text-center text-sm mb-4">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-500">
                        Get Started
                    </Link>
                </p>

                <div className="flex justify-between mb-6">
                    {/* Social Media Buttons */}
                    <SocialLoginButtons />
                </div>

                <div className="text-center mb-4">OR</div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        label="Email address"
                        value={inputs.email}
                        onChange={handleChange}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(inputs.email !== "")}
                        isFocused={emailFocused || inputs.email}
                    />

                    {/* Password Input */}
                    <InputField
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        value={inputs.password}
                        onChange={handleChange}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(inputs.password !== "")}
                        isFocused={passwordFocused || inputs.password}
                        showToggle
                        togglePasswordVisibility={togglePasswordVisibility}
                        eyeIcon={eyeIcon}
                    />

                    {/* Forgot Password */}
                    <div className="text-right">
                        <Link to="#" className="text-sm text-blue-500" onClick={handleForgotPassword}>
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className={`btn w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const InputField = ({
    id,
    name,
    type,
    label,
    value,
    onChange,
    onFocus,
    onBlur,
    isFocused,
    showToggle = false,
    togglePasswordVisibility,
    eyeIcon,
}) => (
    <div className="relative z-0">
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="peer w-full px-3 py-2 border rounded-lg focus:outline-none placeholder-transparent"
            placeholder={label}
        />
        <label
            htmlFor={id}
            className={`absolute left-3 top-3 text-gray-500 duration-300 transform ${isFocused ? "-translate-y-6 scale-75" : "translate-y-0 scale-100"
                }`}
        >
            {label}
        </label>
        {showToggle && (
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-5 w-5 fill-current text-gray-500">
                    <path d={eyeIcon} />
                </svg>
            </button>
        )}
    </div>
);

const SocialLoginButtons = () => (
    <>
        <button className="hover:bg-slate-100 font-bold py-2 px-4 rounded inline-flex justify-center items-center w-full mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="h-5 w-5 fill-current text-red-500">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
        </button>
        <button className="hover:bg-slate-100 font-bold py-2 px-4 justify-center rounded inline-flex items-center w-full mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 fill-current text-blue-600">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
        </button>
        <button className="hover:bg-slate-100 justify-center font-bold py-2 px-4 rounded inline-flex items-center w-full ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current text-blue-500">
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
        </button>
    </>
);

export default Login;

