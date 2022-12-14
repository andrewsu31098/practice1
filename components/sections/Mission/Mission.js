import styles from "./Mission.module.scss";
import { useRef, useEffect, useState } from "react";

export default function Mission(props) {
  const [isVisible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && isVisible) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting ? setVisible(true) : null
      );
    });
    observer.observe(videoRef.current);
  }, []);

  return (
    <div id="about" className={styles.MissionContainer}>
      <div className={styles.Divider}>
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
        <img src="/dash4.svg"></img> <img src="/dash4.svg"></img>{" "}
      </div>
      <div className={styles.Header}>About Us</div>
      <div
        className={`${styles.MissionGrid} ${isVisible ? styles.visited : null}`}
      >
        <div className={styles.VideoWrapper}>
          <div className={styles.TransitionWrapper}>
            <video ref={videoRef} autoPlay muted playsinline loop>
              <source type="video/mp4" src="/videos/mission.mp4"></source>
            </video>
          </div>
        </div>
        <div className={styles.ExplanationFlex}>
          <div className={styles.Title}>
            Drive out with a brand new car today.
          </div>
          <div className={styles.Description}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>{" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className={styles.ExplanationFlex}>
          <div className={styles.Title}>
            Our dedicated staff will handle everything start to finish.
          </div>
          <div className={styles.Description}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className={styles.ImageWrapper}>
          <div className={styles.TransitionWrapper}>
            <img src="/photos/meeting.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
