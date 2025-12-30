import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const cancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🎟️ My Bookings
        </h1>

        <Link
          to="/"
          className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700"
        >
          Back to Home
        </Link>
      </div>

      {/* Bookings */}
      <div className="max-w-6xl mx-auto">
        {bookings.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <p className="text-gray-600 text-lg mb-4">
              No bookings found 😔
            </p>
            <Link
              to="/"
              className="text-red-600 font-semibold hover:underline"
            >
              Book your first movie
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 relative"
              >
                {/* Movie Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  🎬 {booking.movie}
                </h2>

                {/* Details */}
                <p className="text-gray-600">
                  👤 <b>Name:</b> {booking.name}
                </p>
                <p className="text-gray-600">
                  🎟️ <b>Seats:</b> {booking.seats}
                </p>
                <p className="text-gray-600">
                  📅 <b>Date:</b> {booking.date}
                </p>
                <p className="text-gray-600">
                  ⏰ <b>Time:</b> {booking.time}
                </p>

                {/* Amount */}
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  💰 ₹{booking.amount}
                </p>

                {/* Cancel Button */}
                <button
                  onClick={() => cancelBooking(index)}
                  className="absolute top-4 right-4 text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
