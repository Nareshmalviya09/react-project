import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";       // Movies page
import Profile from "./pages/Profile"; // User dashboard

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
