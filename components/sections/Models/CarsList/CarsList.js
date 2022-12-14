import styles from "./CarsList.module.scss";
import { laptopQuery } from "../../../../utilities/breakpoints";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { IconContext } from "react-icons";

export default function CarsList(props) {
  const [carIndex, setCar] = useState(0);
  function onIncrement(event) {
    event.stopPropagation();
    setCar(Math.min(carIndex + 1, props.cars.length - 1));
  }
  function onDecrement(event) {
    event.stopPropagation();
    setCar(Math.max(carIndex - 1, 0));
  }

  const isLaptop = useMediaQuery({ query: laptopQuery });

  return (
    <div className={styles.NewCarsContainer}>
      <div className={styles.NewFlex}>
        <div className={styles.title}>Select Your Choice.</div>
        <div className={styles.CarFlex}>
          {" "}
          <div className={styles.ImageWrapper}>
            <img src={props.cars[carIndex].url} />
          </div>
          {!isLaptop && (
            <div className={styles.ImageMirrorLeft}>
              <img src={props.cars[(carIndex + 1) % props.cars.length].url} />
            </div>
          )}
          {!isLaptop && (
            <div className={styles.ImageMirrorRight}>
              <img src={props.cars[(carIndex + 2) % props.cars.length].url} />
            </div>
          )}
          <div className={styles.SpecsWrapper}>
            <div className={styles.Name}>{props.cars[carIndex].name}</div>
            <div className={styles.Price}>{props.cars[carIndex].price}</div>
            <ul className={styles.Features}>
              {props.cars[carIndex].features.map((feature, index) => (
                <li key={`car ${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
          <IconContext.Provider
            value={{
              size: "24px",
              className: "global-class-name",
              color: carIndex == 0 ? "#999999" : "black",
            }}
          >
            <div
              className={styles.IconWrapperLeft}
              onClick={(event) => onDecrement(event)}
            >
              <SlArrowLeft />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "24px",
              className: "global-class-name",
              color: carIndex == props.cars.length - 1 ? "#999999" : "black",
            }}
          >
            <div
              className={styles.IconWrapperRight}
              onClick={(event) => onIncrement(event)}
            >
              <SlArrowRight />
            </div>
          </IconContext.Provider>
          <div className={styles.Button}>Select Model</div>
        </div>
      </div>
    </div>
  );
}
