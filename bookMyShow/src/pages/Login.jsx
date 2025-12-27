import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/Profile");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Welcome Back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Login
        </button>

        {/* Signup link */}
        <p className="text-center text-gray-600 mt-4">
          New to BookMyShow?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-red-600 cursor-pointer font-semibold"
          >
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
