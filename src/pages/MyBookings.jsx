import React, { useState } from "react";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md-pt-32 px-4 md:px-16 lg:=x-24 xl:px-36">
      <div>
        <h1 className="text-4xl exCard md:text-[40px] font-playfair">
          My Bookings
        </h1>
        <p className="text-sm  md:text-base text-gray-500/90 mt-2 max-w-174">
          Easily manage your past, current, and upcoming hotel reservations in
          one place. Plan your trips seamlessly with just a few clicks
        </p>
      </div>

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="border-b border-gary-300 font-medium text-base py-3 hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full">
          <div className="w-1/3 ">Hotels</div>{" "}
          <div className="w-1/3">Date & Timings</div>{" "}
          <div className="w-1/3 ">Payments</div>
        </div>

        {bookings.map((bookings) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr]
             w-full border-full border-gray-300 py-6  border-b border-gray-500"
            key={bookings._id}
          >
            {/* hotel details  */}
            <div className="flex items-start gap-4 ">
              <img
                src={bookings.room.images[0]}
                alt="hotel-img "
                className="min-md:w-44 rounded shadow objext-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min:md:ml-4">
                <p className="font-playfair text-2xl">
                  {" "}
                  {bookings.hotel.name}
                  <span className="font-inner text-sm">
                    ({bookings.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{bookings.hotel.address}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guest-icon" />
                  <span>Guest: {bookings.guests}</span>
                </div>

                <p className="text-base">Total: ${bookings.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              {" "}
              <div>
                {" "}
                <p>Check-In:</p>
                <p className="text-gary-500 text-sm">
                  {new Date(bookings.checkInDate).toDateString()}
                </p>
              </div>{" "}
              <div>
                {" "}
                <p>Check-Out:</p>
                <p className="text-gary-500 text-sm">
                  {new Date(bookings.checkInDate).toDateString()}
                </p>
              </div>
            </div>
            {/* payment status */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2 ">
                <div
                  className={`rounded-full h-3 w-3 ${
                    bookings.isPaid ? `bg-green-500` : `bg-red-500`
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    bookings.isPaid ? `text-green-500` : `text-red-500`
                  }`}
                >
                  {bookings.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!bookings.isPaid && (
                <button
                  className="px-4 py-1.5 mt-4 text-xs border-gray-500 border
                  rounded-full  hover:bg-green-500 cursor-pointer transition-all "
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
