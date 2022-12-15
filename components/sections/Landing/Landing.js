import styles from "./Landing.module.scss";

export default function Landing(props) {
  return (
    <div className={styles.LandingContainer}>
      <div className={styles.ImageWrapper}>
        <img src="/photos/raincar.jpg" />
      </div>
      <div className={styles.OverlayContainer}>
        <div className={styles.OverlayFlex}>
          <div
            className={styles.Description}
            description="Models from 2000 ready for use."
          >
            Models from 2000 ready for use.{" "}
          </div>
          <div className={styles.Motto} motto="Refined for Excellence">
            Refined for Excellence{" "}
          </div>
          <div className={styles.Button}>
            <a href="#models">Browse Models</a>
          </div>
        </div>
      </div>
      <div className={styles.Darken}></div>
    </div>
  );
}
