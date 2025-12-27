import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ ...user, id: Date.now() });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successful 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Signup
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
