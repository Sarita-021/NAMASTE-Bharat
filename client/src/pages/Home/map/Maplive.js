import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import "./Maplive.css"; // Importing custom CSS

// Example marker icon setup (Leaflet icons)
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Custom component to update the map view
const MapFocus = ({ coordinates }) => {
  const map = useMap();
  if (coordinates) {
    map.setView(coordinates, 10); // Adjust the zoom level to fit the location
  }
  return null;
};

const Maplive = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [mapType, setMapType] = useState("terrain"); // Track map view type

  let img1 =
    "https://storage.googleapis.com/kaggle-datasets-images/1469717/2430768/f04ae88ebb81ce6598f9cfcba1fbeb80/dataset-cover.jpg?t=2021-07-16-10-48-42";
  let img2 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/365px-Taj_Mahal_%28Edited%29.jpeg";

  // Simulate fetching place info (image, description, news) from a source
  const placeInfo = {
    name: location.toLocaleUpperCase,
    image:
      location === "Taj Mahal" ||
      location === "Agra" ||
      location === "agra" ||
      location === "taj mahal"
        ? img2
        : img1, // Use img1 for Delhi and New Delhi, else img2
    description:
      location === "Taj Mahal" ||
      location === "Agra" ||
      location === "agra" ||
      location === "taj mahal"
        ? "Agra, home to the majestic Taj Mahal, invites travelers to explore its timeless beauty and rich Mughal heritage."
        : "Delhi, a vibrant blend of history and modernity, offers an unforgettable journey through time.",
    news:
      location === "Taj Mahal" ||
      location === "Agra" ||
      location === "agra" ||
      location === "taj mahal"
        ? "Breaking news: The Taj Mahal now offers night-time viewing sessions for a magical experience under the stars!"
        : "Exciting news: Delhi's iconic monuments are now offering extended visiting hours for tourists!",
  };

  const handleSearch = async () => {
    // Fetch the location coordinates using Nominatim API
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      setCoordinates([parseFloat(lat), parseFloat(lon)]);
    } else {
      alert("Location not found");
    }
  };

  return (
    <div className="map-container ">
      {/* Input field for user to enter the location */}
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="directions-button">
        <Link to="/Livedirect">Get Directions</Link>
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
        center={[28.6141, 77.2125]} // Default center (can be changed)
        zoom={13}
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
          bottom: "30px",
          zIndex: "2",
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

        {/* Display marker and focus map if coordinates are available */}
        {coordinates && (
          <>
            <Marker position={coordinates} icon={markerIcon}>
              {/* Tooltip for place info */}
              <Tooltip direction="top" offset={[0, -30]} opacity={1} permanent>
                <div className="tooltip-content">
                  <img
                    src={placeInfo.image}
                    alt="Place"
                    className="place-image"
                  />
                  <h3>{placeInfo.name}</h3>
                  <p>{placeInfo.description}</p>
                  <br />
                  <small>{placeInfo.news}</small>
                </div>
              </Tooltip>
            </Marker>
            <MapFocus coordinates={coordinates} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Maplive;
