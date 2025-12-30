import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const movies = [
  { id: 1, title: "Pushpa 2", price: 250 },
  { id: 2, title: "Animal", price: 300 },
  { id: 3, title: "Jawan", price: 280 },
];

const BookShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const totalAmount = seats * movie.price;

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      movie: movie.title,
      name,
      seats,
      date,
      time,
      amount: totalAmount,
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, booking])
    );

    alert("🎉 Booking Confirmed!");
    navigate("/my-bookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          🎬 Book {movie.title}
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Seats */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Number of Seats
          </label>
          <input
            type="number"
            min="1"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Show Date
          </label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Show Time
          </label>
          <select
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Time</option>
            <option>10:00 AM</option>
            <option>1:30 PM</option>
            <option>6:00 PM</option>
            <option>9:30 PM</option>
          </select>
        </div>

        {/* Amount */}
        <div className="mb-5 text-lg font-semibold">
          Total Amount: ₹{totalAmount}
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookShow;
