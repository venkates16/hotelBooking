import React, { useState } from "react";
import { assets } from "../../assets/assets";
const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFI": false,
      "Free Breakfast": false,
      "Free Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <div>
      <form className="mb-20">
        <div>
          <h1 className="text-4xl   md:text-[40px] font-playfair">Add Room</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Fill in the details carefully and accurate room details, pricing,
            and amenities, to enhance the user booking experience.
          </p>
        </div>
        {/* Upload Images  */}
        <p className="text-gray-800 mt-10">Images</p>
        <div className="grid grid-cols-2 sm:flex gap-4 py-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label htmlFor={`roomIamge${key} `} key={key}>
              <img
                className="w-20 h-20 cursor-pointer opacity-80"
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=""
              />
              <input
                type="file"
                accept="image/*"
                id={`roomIamge${key} `}
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            required
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w--full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="">Double Bed</option>
            <option value="Luxury Romm">Luxury Room </option>
            <option value="Family Suits">Family Suits</option>
          </select>
        </div>

        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24 "
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>

        <p className="text-gray-800 mt-4">Amenities</p>
        <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="gap-2 flex">
              {" "}
              <input
                required
                className="cursor-pointer"
                type="checkbox"
                id={`amenities ${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity],
                    },
                  })
                }
              />
              <label
                className="cursor-pointer"
                htmlFor={`amenities ${index + 1}`}
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
        <button
          className="bg-[#7575f6] text-white px-8 py-2
         rounded mt-8 cursor-pointer mb-12"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
