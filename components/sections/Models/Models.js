import styles from "./Models.module.scss";
import { useState } from "react";

import { usedCars, newCars } from "../../../public/data/carsdata.js";
import dynamic from "next/dynamic";
const CarsList = dynamic(() => import("./CarsList/CarsList"), { ssr: false });
export default function Models(props) {
  const [newCondition, setCondition] = useState(true);

  function clickCondition(condition) {
    setCondition(condition);
    console.log("Clicked");
  }

  return (
    <div className={styles.ModelsContainer} id="models">
      <div className={styles.ModelsFlex}>
        <div className={styles.Title}> Viewing Offers at Local Dealerships</div>
        <div className={styles.ConditionFlex}>
          <div
            className={`${styles.New} ${
              newCondition ? styles.NewCondition : null
            }  `}
            onClick={(e) => clickCondition(true)}
          >
            <span>&nbsp;New Additions&nbsp;</span>
          </div>
          <span className={styles.Border} />
          <div
            className={`${styles.Used} ${
              newCondition ? styles.NewCondition : null
            }  `}
            onClick={(e) => clickCondition(false)}
          >
            <span>Pre-Owned Deals</span>
          </div>
        </div>
        {newCondition && <CarsList cars={newCars} />}

        {!newCondition && <CarsList cars={usedCars} />}
      </div>
    </div>
  );
}
