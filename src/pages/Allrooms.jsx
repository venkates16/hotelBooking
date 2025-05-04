import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import Startratingreview from "../components/Startratingreview";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)} // we understood next this part of selection
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

export const Allrooms = () => {
  const navigate = useNavigate();
  const [openFilters, setopenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room ", "Family Romm"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price Heigh to Low ",
    "Newest First",
  ];

  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-start
    justify-between pt-28 md:pt-35 px-4 md:px-30 1g:px-24
    x1:px-32"
    >
      <div>
        <div>
          {" "}
          <h1 className="text-4xl md-text-[40px] font-playfair">Hotel Rooms</h1>
          <p className="text-sm md-text-base text-gray-500/90 max-w-174 mt-2">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        {roomsDummyData.map((room) => {
          return (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-12 gap-6 rounded border-b border-gray-300 last:pb-30 last:border-0"
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                className="cursor-pointer max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover "
                title="View room details"
              />
              <div>
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  className="font-playfair cursor-pointer text-gray-800 text-3xl"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center">
                  <Startratingreview />
                  <p className="ml-2"> 200+ reviews</p>
                </div>
                <div className="items-center flex gap-1 text-gray-500 mt-2 text-sm">
                  <img src={assets.locationIcon} alt="locatio-icon" />
                  <span>{room.hotel.address}</span>
                </div>
                {/* room facilities */}
                <div className="flex  flex-wrap items-center mt-3 mb-6 gap-1 ">
                  {room.amenities.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex   items-center px-3 py-2 rounded-lg bg-[#F5F5FF]/70 gap-3 "
                      >
                        <img
                          src={facilityIcons[item]}
                          alt={item}
                          className="w-5 h-5"
                        />
                        <p className="text-xs">{item}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xl font-medium text-gray-700">
                  ${room.pricePerNight} /night
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* filters */}
      <div className="bg-white w-[90%] lg:w-70 border border-gray-300 text-gray-600 max-lg:mb-8  min-lg-:mt-16">
        <div className="border border-gray-300 flex justify-between py-2 items-center px-3">
          <p className="text-base font-medium text-gray-800">FILTERS</p>

          <div className="cursor-pointer font-medium text-gray-800">
            <span onClick={() => setopenFilters(!openFilters)}>
              {openFilters ? "HIDE" : "SHOW"}
            </span>
          </div>
        </div>

        <div
          className={`${
            openFilters ? " h-auto" : "h-0 " // lg-h-auto
          } overflow-hidden transition-all duration-700`}
        >
          <p className="  text-center text-gray-900 font-medium cursor-pointer pt-2 border ">
            CLEAR FILTERS
          </p>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>

            {roomTypes.map((range, index) => {
              return <CheckBox key={index} label={`$ ${range}`} />;
            })}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => {
              return <CheckBox key={index} label={`$ ${range}`} />;
            })}
          </div>

          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => {
              return <RadioButton key={index} label={option} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allrooms;
