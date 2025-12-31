import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Card categories
const categories = [
  {
    title: "Movies",
    description: "Latest blockbuster films",
    img: "movi1.jpg",
  },
  {
    title: "Events",
    description: "Exciting live events near you",
    img: "event2.jpg",
  },
  {
    title: "Sports",
    description: "Live sports matches & tournaments",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Concerts",
    description: "Music concerts and live shows",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Comedy Shows",
    description: "Laugh out loud comedy shows",
    img: "comedy1.jpg",
  },
];

// Hero slider images
const heroImages = [
  "bg-3.jpg",
  "bg2.webp",
  "bg-1.jpg",
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  // Auto slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-red-500 text-white px-8 py-4 shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">
            🎬 BookMyShow
          </h1>
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Auto Slider */}
      <section
        className="flex-1 flex flex-col justify-center items-center text-center px-6 py-24 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
        }}
      >
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          Book Movies, Events & Shows
        </h2>
        <p className="max-w-2xl text-lg text-white/90 mb-8">
          Discover movies, concerts, sports, comedy shows and live events near
          you. Easy booking, instant confirmation.
        </p>
        <input
          type="text"
          placeholder="Search for Movies, Events, Sports..."
          className="w-full max-w-xl px-6 py-4 rounded-full text-gray-800 mb-8 focus:outline-none focus:ring-4 focus:ring-red-300"
        />
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-900"
          >
            Already a User
          </Link>
        </div>

        {/* Slider dots */}
        <div className="flex gap-2 mt-8">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Explore Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden cursor-pointer transition"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{cat.title}</h4>
                <p className="text-gray-700">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-500 text-gray-400 text-center py-5 text-sm">
        Created by @Naresh Malviya 
      </footer>
    </div>
  );
};

export default Index;
