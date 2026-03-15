import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ item }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    item && GetPlacePhoto();
  }, [item]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: item?.hotelName,
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        item?.hotelName +
        item?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          alt="hotel"
          className="rounded-xl object-cover h-[180px] w-full"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{item?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {item?.hotelAddress}</h2>
          <h2 className="text-sm">💰 {item?.price}</h2>
          <h2 className="text-sm">⭐ {item?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
