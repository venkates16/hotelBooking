import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
export const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-75   rounded-xl overflow-hidden bg-white text-gray-500?90 shadow-md"
    >
      <img src={room.images[0]} alt="" className="w-100 rounded-xl " />
      {index % 2 === 0 && (
        <p className="px-2 py-1 m-2 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
          {" "}
          Best Seller
        </p>
      )}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex gap-1">
            <img src={assets.starIconFilled} alt="star-icon" /> <span>4.5</span>
          </div>
        </div>
        <div className="flex items-center  gap-1 text-sm text-gray-500/90">
          <img src={assets.locationIcon} alt="location-icon" />
          <span className="">{room.hotel.address}</span>
        </div>
        <div className="flex justify-between py-3">
          <p className=" text-sm md:text-base text-gray-500/90">
            <span className="text-xl text-gray-800">${room.pricePerNight}</span>
            /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
