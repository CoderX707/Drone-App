import React from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import drone from "../drone.svg";

export default function Map({ path, currentIndex }) {
  return (
    <>
      <div className="">
        <GoogleMap
          mapContainerStyle={{ height: "100vh", width: "100%" }}
          center={path[currentIndex]}
          zoom={15}
        >
          <Marker position={path[currentIndex]} icon={drone} />
          <Polyline path={path.slice(0, currentIndex + 1)} />
        </GoogleMap>
      </div>
    </>
  );
}
