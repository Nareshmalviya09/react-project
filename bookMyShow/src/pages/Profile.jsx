import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../component/UserForm";
import UserList from "../component/UserList";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const refreshUser = () => {
    const updatedUser = localStorage.getItem("loggedInUser");
    if (updatedUser) {
      setUser(JSON.parse(updatedUser));
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="bg-red-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎬 BookMyShow</h1>

        <div className="flex gap-4">
          <Link to="/home" className="underline">
            Home
          </Link>
          <button
            onClick={logout}
            className="bg-white text-red-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* User Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">👤 User Profile</h2>
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {user.email}
          </p>
        </div>

        {/* Edit Profile */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <UserForm user={user} refresh={refreshUser} />
        </div>
      </div>

      {/* User List (Admin / Optional) */}
      <div className="max-w-5xl mx-auto mt-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <UserList refresh={refreshUser} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
