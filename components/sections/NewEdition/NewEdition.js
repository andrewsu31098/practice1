import styles from "./NewEdition.module.scss";

export default function NewEdition(props) {
  return (
    <div className={styles.NewEditionContainer}>
      <div className={styles.ImageWrapper}>
        <img src="/photos/forestcar.jpg"></img>
      </div>
      <div className={styles.OverlayContainer}>
        <div className={styles.OverlayFlex}>
          <div className={styles.Motto} motto="Refined for Excellence">
            Built for travel{" "}
          </div>
          <div
            className={styles.Description}
            description="Models from 2000 ready for use."
          >
            Our newest addition.{" "}
          </div>
          <div className={styles.Name}>Chevrolet Blazer 2022</div>
          <div className={styles.Button}>Find Yours</div>
        </div>
      </div>
    </div>
  );
}
