import pin from "../../assets/icons/pin.svg";
import styles from "./DealerData.module.css";

const DealerData = ({ dealerInfo, selectedLocationFunction }) => {
  const { name, address, lat, lng } = dealerInfo;

  return (
    <div
      className={styles.dealerData}
      onClick={() => {
        selectedLocationFunction(lat, lng);
      }}
    >
      <div className={styles.dealerName}>
        <img src={pin} alt="pin icon" />
        <div>
          <span>{name}</span>
        </div>
      </div>
      <div className={styles.dealerAddress}>
        <span>Address:</span>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default DealerData;
