import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "../Components/InfoSection";
import Hotels from "../Components/Hotels";
import PlacesToVisit from "../Components/PlacesToVisit";
import Footer from "../Components/footer";

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      console.log("Document: ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document");
      toast("No trip Foud");
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* {Information section} */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels*/}
      <Hotels trip={trip} />
      {/* Daily plan */}

      <PlacesToVisit trip={trip} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Viewtrip;
