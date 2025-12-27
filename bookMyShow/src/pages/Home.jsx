import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Pushpa 2",
    price: 250,
    img: "https://via.placeholder.com/400x300?text=Pushpa+2"
  },
  {
    id: 2,
    title: "Animal",
    price: 300,
    img: "https://via.placeholder.com/400x300?text=Animal"
  },
  {
    id: 3,
    title: "Jawan",
    price: 280,
    img: "https://via.placeholder.com/400x300?text=Jawan"
  }
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedInUser")) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-red-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-extrabold tracking-wide">
          🎬 BookMyShow
        </h1>

        <div className="flex items-center gap-6">
          <Link to="/profile" className="hover:underline font-medium">
            Profile
          </Link>
          <Link to="/my-bookings" className="hover:underline font-medium">
            My Bookings
          </Link>
          <button
            onClick={logout}
            className="bg-white text-red-600 px-4 py-1.5 rounded font-semibold hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Movies Section */}
      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          🎥 Now Showing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Movie Image */}
              <div className="relative">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="h-64 w-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                  ₹{movie.price}
                </span>
              </div>

              {/* Movie Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {movie.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Action • Drama • 2h 30m
                </p>

                <Link
                  to={`/book/${movie.id}`}
                  className="mt-5 block bg-red-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
