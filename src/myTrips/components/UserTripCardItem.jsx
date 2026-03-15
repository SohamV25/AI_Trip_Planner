import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };

    try {
      console.log("Fetching for:", data.textQuery); // 1. Check if function starts
      const resp = await GetPlaceDetails(data);
      console.log("API Response:", resp.data.places[0].photos[0].name); // 2. Check if data arrives
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name,
      );
      setPhotoUrl(PhotoUrl);
    } catch (error) {
      console.error("API Error Detail:", error.response?.data || error.message); // 3. Check for errors
    }
  };
  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="hover:scale-105 transition-all hover:shadow-md">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          alt=""
          className="object-cover rounded-xl h-[250px] "
        />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>

          <h2 className="text-sm text-gray-600">
            {trip?.userSelection?.noOfDays} Days of trip with{" "}
            {trip?.userSelection?.budget} budget Travelers :{" "}
            {trip?.userSelection?.traveler}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
