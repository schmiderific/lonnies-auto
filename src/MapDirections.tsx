import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React, { useEffect, useRef } from "react";

function MapDirections() {
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const originInputRef = useRef(null);

  // Initialize the map and directions service/renderer
  useEffect(() => {
    // global 'google' must be loaded via script tag in public/index.html or use a loader
    mapRef.current = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 37.422, lng: -122.084 },
    });
    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
    directionsRendererRef.current.setMap(mapRef.current);
    directionsRendererRef.current.setPanel(document.getElementById("directions-panel"));
  }, []);

  // Function to calculate and display the route
  function calculateRoute() {
    const origin = originInputRef.current.value;
    const destination = "1600 Amphitheatre Parkway, Mountain View, CA"; // your fixed destination

    if (!origin) return;

    directionsServiceRef.current.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(response);
        } else {
          alert("Directions request failed: " + status);
        }
      }
    );
  }

  return (
    <div>
      <input ref={originInputRef} type="text" placeholder="Enter your address" />
      <button onClick={calculateRoute}>Show Directions</button>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      <div id="directions-panel"></div>
    </div>
  );
}
  
export default MapDirections;