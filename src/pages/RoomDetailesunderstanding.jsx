//  import { useState } from "react";

//   const userDummyData = {
//     _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
//     username: "Venkateswara Reddy",
//     email: "user.greatstack@gmail.com",
//     image:
//       "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
//     role: "hotelOwner",
//     createdAt: "2025-03-25T09:29:16.367Z",
//     updatedAt: "2025-04-10T06:34:48.719Z",
//     __v: 1,
//     recentSearchedCities: ["New York"],
//   };
//    const hotelDummyData = {
//     _id: "67f76393197ac559e4089b72",
//     name: "Urbanza Suites",
//     address: "Main Road  123 Street , 23 Colony",
//     contact: "+0123456789",
//     owner: userDummyData,
//     city: "New York",
//     createdAt: "2025-04-10T06:22:11.663Z",
//     updatedAt: "2025-04-10T06:22:11.663Z",
//     __v: 0,
//   };

//    const roomsDummyData = [
//     {
//       _id: "67f7647c197ac559e4089b96",
//       hotel: hotelDummyData,
//       roomType: "Double Bed",
//       pricePerNight: 399,
//       amenities: ["Room Service", "Mountain View", "Pool Access"],
//       images: [1,2,3,4],
//       isAvailable: true,
//       createdAt: "2025-04-10T06:26:04.013Z",
//       updatedAt: "2025-04-10T06:26:04.013Z",
//       __v: 0,
//     },
//     {
//       _id: "67f76452197ac559e4089b8e",
//       hotel: hotelDummyData,
//       roomType: "Double Bed",
//       pricePerNight: 299,
//       amenities: ["Room Service", "Mountain View", "Pool Access"],
//       images:  [1,2,3,4],
//       isAvailable: true,
//       createdAt: "2025-04-10T06:25:22.593Z",
//       updatedAt: "2025-04-10T06:25:22.593Z",
//       __v: 0,
//     },
//     {
//       _id: "67f76406197ac559e4089b82",
//       hotel: hotelDummyData,
//       roomType: "Double Bed",
//       pricePerNight: 249,
//       amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
//       images:  [1,2,3,4],
//       isAvailable: true,
//       createdAt: "2025-04-10T06:24:06.285Z",
//       updatedAt: "2025-04-10T06:24:06.285Z",
//       __v: 0,
//     },
//     {
//       _id: "67f763d8197ac559e4089b7a",
//       hotel: hotelDummyData,
//       roomType: "Single Bed",
//       pricePerNight: 199,
//       amenities: ["Free WiFi", "Room Service", "Pool Access"],
//       images: [1,2,3,4],
//       isAvailable: true,
//       createdAt: "2025-04-10T06:23:20.252Z",
//       updatedAt: "2025-04-10T06:23:20.252Z",
//       __v: 0,
//     },

//     const [room, SetRoom] = useState(null);
//     const [mainImage, setMainImage] = useState(null);

//     useEffect(() => {
//       const room = roomsDummyData.find((room) => room.__id == id);
//       room && SetRoom(room);
//       room && setMainImage(room.images[0]);
//     }, []);

//   ];
