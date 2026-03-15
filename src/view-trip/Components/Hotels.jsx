import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  console.log("Your trip is: ", trip);
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Check your console: is it 'hotels' or 'hotelOptions'? */}
        {(
          trip?.tripData?.travelPlan?.hotels || trip?.tripData?.hotelOptions
        )?.map((item, index) => (
          <HotelCardItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
