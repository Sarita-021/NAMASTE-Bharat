import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [roleFocused, setRoleFocused] = useState(false);

  const showpass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    showeye();
  };

  let d1 =
    "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z";
  let d2 =
    "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z";
  const [d, setD] = useState(d2);
  function showeye() {
    if (d === d1) {
      setD(d2);
    } else {
      setD(d1);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/z/collage-displaying-rich-cultural-heritage-india-vector-illustration-75632523.jpg')] opacity-30 bg-cover bg-center "></div>

      <div className="bg-white p-8 rounded-lg shadow-md shadow-slate-300 max-w-sm w-full relative z-10">
        <h2 className="text-center text-2xl font-bold mb-4">
          Sign Up to Our Culture
        </h2>
        <p className="text-center text-sm mb-4">
          Already have an account?{" "}
          <Link to="/SignIn" className="text-blue-500">
            Sign In
          </Link>
        </p>
        <br />

        {/* <div className="text-center mb-4">OR</div> */}

        <form className="space-y-4">
          {/* name input field */}
          <div className="relative z-0">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(email !== "")}
              className="peer w-full px-3 py-2 border rounded-lg focus:outline-none placeholder-transparent "
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-3 text-gray-500 duration-300 transform ${
                nameFocused || name
                  ? "-translate-y-6 scale-75 "
                  : "translate-y-0 scale-100"
              }`}
            >
              Name
            </label>
          </div>
          {/* Email Input with Animation */}
          <div className="relative z-0">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(email !== "")}
              className="peer w-full px-3 py-2 border rounded-lg focus:outline-none placeholder-transparent "
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-3 text-gray-500 duration-300 transform ${
                emailFocused || email
                  ? "-translate-y-6 scale-75 "
                  : "translate-y-0 scale-100"
              }`}
            >
              Email address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative z-0">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(password !== "")}
              className="peer w-full px-3 py-2 border rounded-lg focus:outline-none placeholder-transparent"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className={`absolute left-3 top-3 text-gray-600 duration-300 transform ${
                passwordFocused || password
                  ? "-translate-y-6 scale-75 text-blue-500"
                  : "translate-y-0 scale-100"
              }`}
            >
              Password
            </label>
            <button
              onClick={showpass}
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5 w-5 fill-current text-gray-500"
              >
                <path d={d} />
              </svg>
            </button>
          </div>

          {/* role field */}
          <div className="relative z-0">
            <select
              name="Role"
              type="email"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              onFocus={() => setRoleFocused(true)}
              onBlur={() => setRoleFocused(email !== "")}
              className="peer w-full px-3 py-2 border rounded-lg focus:outline-none appearance-none placeholder-transparent "
              placeholder="Role"
            >
              <option value=""></option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Tourist">Tourist</option>
              <option value="Admin">Admin</option>
            </select>
            <label
              htmlFor="role"
              className={`absolute left-3 top-3 text-gray-500 duration-300 transform ${
                roleFocused || role
                  ? "-translate-y-6 scale-75 "
                  : "translate-y-0 scale-100"
              }`}
            >
              Role
            </label>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div>
          <br />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
