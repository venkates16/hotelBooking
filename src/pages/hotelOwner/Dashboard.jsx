import React, { useState } from "react";
import { dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div>
      <div>
        <h1 className="text-4xl   md:text-[40px] font-playfair">Dashboard</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Monitor your room listings, track bookings and analyze revenue—all in
          one place. Stay updated with real-time insights to ensure smooth
          operations.
        </p>
      </div>

      {/* Recent Bookings  */}

      <h1 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings{" "}
      </h1>
      <div
        className="w-full max-w-3xl text-left border border-gray-300 
      rounded-lg max-h-80 overflow-y-scroll"
      >
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th className="py-3 px-4 text-gray-800 max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.user.username}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  {item.totalPrice}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  <button
                    className={`py-1 px-3 rounded-full mx-auto ${
                      item.isPaid
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
