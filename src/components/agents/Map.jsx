import agents from "../../dummyData/agents";
import { useEffect, useState } from "react";
import MapSideBar from "./MapSideBar";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [data, setData] = useState();
  const [selectedLocation, setSelectedLocation] = useState([
    35.7341318, 51.405951,
  ]);

  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  useEffect(() => {
    setData(agents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedLocationFunction = (lat, lng) => {
    setSelectedLocation([lat, lng]);
  };

  function LocationMarker() {
    const map = useMap();
    useEffect(() => {
      map.flyTo(selectedLocation, 13);
    }, [map]);
  }

  function MultipleMarkers() {
    return data?.map((place) => {
      return (
        <Marker key={place?.id} position={[place?.lat, place?.lng]} icon={icon}>
          <Popup>
            {place?.name}
            <br />
            {place?.address}
          </Popup>
        </Marker>
      );
    });
  }

  return (
    <div style={{ width: "100%", height: "910px" }}>
      <MapContainer
        style={{ height: "100%" }}
        center={[35.7341318, 51.405951]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <MultipleMarkers />
      </MapContainer>
      <MapSideBar
        dealerData={data}
        selectedLocationFunction={selectedLocationFunction}
      />
    </div>
  );
}
