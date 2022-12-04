import styles from "./FixedSection.module.scss";
import Models from "../Models/Models";
import NewEdition from "../NewEdition/NewEdition";
import Mission from "../Mission/Mission";

export default function FixedSection(props) {
  return (
    <div className={styles.FixedSection}>
      <Models />
      <NewEdition />
      <Mission />
    </div>
  );
}
