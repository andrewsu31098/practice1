import styles from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterFlex}>
        <div className={styles.Links}>
          <div>Home</div> <div>Browse Models</div>
          <div>Our Mission</div>
        </div>
        <div className={styles.About}>
          <div className={styles.Name}>Company Name</div>
          <div className={styles.Description}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui.
          </div>
        </div>
        <div className={styles.Logos}></div>
      </div>
    </div>
  );
}
