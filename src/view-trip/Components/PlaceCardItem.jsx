import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
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
        encodeURIComponent(place?.placeName)
      }
      target="_blank"
      className="h-full" // Ensures the Link takes full height
    >
      <div className="border rounded-xl p-3 flex gap-4 hover:shadow-md hover:border-orange-400 transition-all cursor-pointer bg-white h-full group">
        {/* Fixed Square Image */}
        <div className="min-w-[120px] w-[120px] h-[120px]">
          <img
            src={photoUrl ? photoUrl : "/placeholder.jpg"}
            alt={place.placeName}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-between flex-grow py-1">
          <div>
            <h2 className="font-bold text-md text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
              {place.placeName}
            </h2>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              {place.placeDetails}
            </p>
          </div>

          <div className="flex justify-between items-end mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-medium">
                Ticket Price
              </span>
              <h2 className="text-xs font-bold text-gray-700">
                {place.ticketPricing}
              </h2>
            </div>
            <Button
              size="icon"
              className="h-8 w-8 bg-gray-100 text-black hover:bg-orange-600 hover:text-white transition-colors"
            >
              <FaMapLocationDot />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
