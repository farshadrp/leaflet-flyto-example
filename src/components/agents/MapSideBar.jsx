import DealerData from "./DealerData";
import styles from "./MapSideBar.module.css";

const MapSideBar = ({ dealerData, selectedLocationFunction }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.dealersWrapper}>
        {dealerData?.map((dealer) => (
          <DealerData
            key={dealer?.id}
            dealerInfo={dealer}
            selectedLocationFunction={selectedLocationFunction}
          />
        ))}
      </div>
    </div>
  );
};

export default MapSideBar;
