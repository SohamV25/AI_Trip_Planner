import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";

function InfoSection({ trip }) {
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
    <div>
      <img
        src={photoUrl ? photoUrl : "/placeholder.jpg"}
        className="h-[340px] w-full object-cover rounded-xl"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>

          <div className="flex gap-5">
            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-xs md:text-md">
              🗓️
              {trip.userSelection?.noOfDays}Day
            </h2>

            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-xs md:text-md">
              💸{trip.userSelection?.budget} Budget
            </h2>

            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-xs md:text-md">
              👭🏼 No. Of Traveler :{trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <FaShareAlt />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
