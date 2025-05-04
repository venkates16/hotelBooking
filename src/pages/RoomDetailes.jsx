import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";

import { Startratingreview } from "../components/Startratingreview";
export const RoomDetailes = () => {
  const { id } = useParams;
  const [room, SetRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room.__id == id);
    room && SetRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 lg:px-24 xl:px-32">
        {/* Room Details */}

        <div className="flex flex-col md:flex-row md:items-center gap-2 items-start">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}
          </h1>
          <span className="font-inter text-sm py-4">({room.roomType})</span>
          <p className="text-xs font-inter py-2 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}

        <div className="flex items-center gap-1 mt-2">
          <Startratingreview className="pt-2" />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* room address */}

        <div className="flex items-center gap-1 mt-2 text-gray-500 ">
          <img src={assets.locationIcon} alt="loaction-Icon" />
          <p className=""> {room.hotel.address}</p>
        </div>
        {/* room images */}

        <div className="flex flex-col gap-6 mt-6 lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="room image"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg-w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  onClick={() => setMainImage(image)}
                  alt="room image"
                  key={index}
                  className={`w-full rounded-xl shadow-md cursor-pointer object-cover ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* room highlights */}

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2  rounded-g bg-gray-100 "
                >
                  <img
                    src={facilityIcons[item]}
                    className="w-5 h-5"
                    alt={item}
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* room price */}

          <p className="text-2xl font-medium">${room.pricePerNeight}/night</p>

          {/* checkin checkout forms */}
        </div>

        <form
          className="flex flex-col md:flex-row items-start md:items-center justify-between 
          bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 
          rounded-xl mx-auto mt-16  "
        >
          <div
            className="flex  flex-wrap gap-4 md:flex-row items-start
           md:items-center md:gap-10 text-gray-500"
          >
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                {" "}
                Check-In
              </label>
              <input
                className="w-full rounded border border-gray-300 px-3
                 px-3 py-2 mt-1.5 outline-none"
                required
                type="date"
                id="checkInDate"
                placeholder="Check-In"
              />
            </div>

            <div className="w-px h-15 bg-gray-300 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                {" "}
                Check-Out
              </label>
              <input
                className=" w-full rounded border border-gray-300 px-3 px-3 py-2 mt-1.5 outline-none"
                required
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
              />
            </div>

            <div className="w-px h-15 bg-gray-300 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                {" "}
                Guests
              </label>
              <input
                className="max-w-20 rounded border border-gray-300 px-3 px-3 py-2 mt-1.5 outline-none"
                required
                type="number"
                id="guests"
                placeholder="0"
              />
            </div>
          </div>

          <button
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all 
            text-white rounded-md px-10
             max-md:mt-6 md:px-25 py-3 md:py-4 mt-4 text-base cursor-pointer"
          >
            Check Avalability
          </button>
        </form>

        {/* form spcificatiion */}

        <div className="flex-col gap-4 mt-12">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex gap-4  items-center mb-4">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-8.5"
              />
              <div>
                {" "}
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          {" "}
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.{" "}
          </p>
        </div>
        {/* Hosted by  */}

        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18  rounded-full "
            />
            <div>
              <p className="text-lg md:text-xl"> Hosted by {room.hotel.name}</p>
              <div className="flex items-center mt-2 gap-2">
                <Startratingreview />
                <p>200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetailes;
