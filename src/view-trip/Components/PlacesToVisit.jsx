import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mb-5">Itinerary</h2>

      <div className="space-y-10">
        {trip?.tripData?.travelPlan?.itinerary.map((item, index) => (
          <div key={index} className="border-l-4 border-orange-200 pl-6 ml-2">
            {/* Day Header with a nice 'pill' look */}
            <h2 className="font-bold text-lg py-1 px-4 bg-orange-50 text-orange-700 rounded-full inline-block mb-6 shadow-sm">
              Day {item.day}
            </h2>

            {/* Grid with items-stretch to keep heights equal */}
            <div className="grid gap-6 md:grid-cols-2 items-stretch">
              {item?.activities.map((place, i) => (
                <div key={i} className="flex flex-col">
                  {/* Small Time Badge above the card */}
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest ml-1 mb-1">
                    📍 {place.timeToTravel || "Flexible Time"}
                  </span>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
