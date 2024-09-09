import { Marker, Popup } from "react-leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function MultipleMarkers({ data }) {
  return data?.map((place) => {
    <Marker key={place?.id} position={[place?.lat, place?.lng]} icon={icon}>
      <Popup>{place?.address}</Popup>
    </Marker>;
  });
}

export default MultipleMarkers;
