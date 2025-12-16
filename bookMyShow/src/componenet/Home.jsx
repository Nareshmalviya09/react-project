import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Film, Ticket, Star } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      {/* ===== Navbar ===== */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg"
      >
        <h1 className="text-2xl font-extrabold tracking-wide">🎬 BookMyShow</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {['Home', 'Movies', 'Events', 'Contact'].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:scale-110 hover:text-yellow-300 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden sm:block">Hi, {user?.name}</span>
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded-full hover:bg-red-600 hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </motion.nav>

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome, <span className="text-purple-600">{user?.name}</span>
          </h2>
          <p className="text-lg text-gray-600">
            Book movies, events & shows with smooth experience ✨
          </p>
        </motion.div>

        {/* ===== Feature Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {[{
            icon: Film,
            title: 'Latest Movies',
            desc: 'Watch trending movies near you',
          }, {
            icon: Ticket,
            title: 'Easy Booking',
            desc: 'Book tickets in just a few clicks',
          }, {
            icon: Star,
            title: 'Top Rated Shows',
            desc: 'Experience highly rated events',
          }].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white rounded-2xl p-6 shadow-xl text-center cursor-pointer"
            >
              <card.icon className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* ===== Footer ===== */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-900 text-gray-300 text-center py-4"
      >
        © 2025 BookMyShow Clone | Designed with ❤️
      </motion.footer>
    </div>
  );
};

export default Home;