import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./componenet/Signup";
import Login from "./componenet/Login";
import Home from "./componenet/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
