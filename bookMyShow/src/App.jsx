import { Routes, Route } from "react-router-dom";
import Index from "../src/pages/index"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";       // Movies page
import Profile from "./pages/Profile"; // User dashboard
import BookShow from "./pages/BookShow";
import MyBookings from "./pages/MyBookings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/book/:id" element={<BookShow />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      
      
    </Routes>
  );
};

export default App;
