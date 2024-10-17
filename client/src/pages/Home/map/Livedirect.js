import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { Link } from "react-router-dom";
import "./live.css";

// Example marker icon setup
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to handle routing and clear previous routes
const Directions = ({ start, end }) => {
  const map = useMap();
  const routingControlRef = useRef(null); // Ref to store the routing control instance

  useEffect(() => {
    if (start && end) {
      // Remove the previous route if it exists
      if (routingControlRef.current) {
        routingControlRef.current.getPlan().setWaypoints([]); // Clear the old waypoints
        map.removeControl(routingControlRef.current); // Remove the old route
      }

      // Create a new routing control
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(start[0], start[1]), // "From" location
          L.latLng(end[0], end[1]), // "To" location
        ],
        routeWhileDragging: true,
      }).addTo(map);
    }

    // Clean up: remove the route when the component is unmounted
    return () => {
      if (routingControlRef.current) {
        routingControlRef.current.getPlan().setWaypoints([]); // Clear the waypoints
        map.removeControl(routingControlRef.current); // Remove the routing control
      }
    };
  }, [map, start, end]);

  return null;
};

const Livedirect = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [fromCoordinates, setFromCoordinates] = useState(null); // "From" location coordinates
  const [toCoordinates, setToCoordinates] = useState(null); // "To" location coordinates
  const [mapType, setMapType] = useState("terrain"); // Track map view type

  const handleSearch = async () => {
    // Fetch the coordinates for the "From" location
    if (fromLocation) {
      const fromResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${fromLocation}&format=json&limit=1`
      );
      const fromData = await fromResponse.json();

      if (fromData && fromData.length > 0) {
        const { lat: fromLat, lon: fromLon } = fromData[0];
        setFromCoordinates([parseFloat(fromLat), parseFloat(fromLon)]);
      } else {
        alert("From location not found");
        return;
      }
    }

    // Fetch the coordinates for the "To" location
    if (toLocation) {
      const toResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${toLocation}&format=json&limit=1`
      );
      const toData = await toResponse.json();

      if (toData && toData.length > 0) {
        const { lat: toLat, lon: toLon } = toData[0];
        setToCoordinates([parseFloat(toLat), parseFloat(toLon)]);
      } else {
        alert("To location not found");
        return;
      }
    }
  };

  return (
    <div className="map-container">
      {/* Input fields for "From" and "To" locations */}
      <input
        type="text"
        placeholder="From location"
        value={fromLocation}
        onChange={(e) => setFromLocation(e.target.value)}
        className="location-input"
      />
      <input
        type="text"
        placeholder="To location"
        value={toLocation}
        onChange={(e) => setToLocation(e.target.value)}
        className="location-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="directions-button ">
        <Link to="/maplive">Get Places</Link>
      </button>

      {/* Buttons to toggle between map views */}
      <div
        className="map-buttons"
        style={{
          position: "relative",
          zIndex: "3",
          left: "40vw",
          top: "20px",
        }}
      >
        <button
          style={{
            background: "white",
            marginRight: "10px",
            padding: "10px",
          }}
          onClick={() => setMapType("terrain")}
        >
          Terrain View
        </button>
        <button
          style={{
            background: "white",
            padding: "10px",
          }}
          onClick={() => setMapType("satellite")}
        >
          Satellite View
        </button>
      </div>

      {/* Map display */}
      <MapContainer
        center={[28.6141, 77.2125]} // Default center of the map
        zoom={15}
        style={{
          height: "500px",
          position: "relative",
          bottom: "30px",
          zIndex: "2",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {/* Conditionally render terrain or satellite view */}
        {mapType === "terrain" ? (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        ) : (
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors'
          />
        )}

        {/* Display markers and directions if both coordinates are available */}
        {fromCoordinates && toCoordinates && (
          <>
            <Marker position={fromCoordinates} icon={markerIcon} />{" "}
            {/* "From" location marker */}
            <Marker position={toCoordinates} icon={markerIcon} />{" "}
            {/* "To" location marker */}
            <Directions start={fromCoordinates} end={toCoordinates} />{" "}
            {/* Display directions */}
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Livedirect;
