import styles from "./ContactForm.module.scss";
import { useState } from "react";

export default function ContactForm(props) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formInfo.name !== "" &&
      formInfo.email !== "" &&
      formInfo.namessage !== ""
    )
      setSuccess(true);
    setFormInfo({ name: "", email: "", message: "" });
  }

  function handleChange(event) {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  }

  return (
    <div className={styles.ContactContainer}>
      <div className={styles.ContactFlex}>
        <div className={styles.Header}>
          <div className={styles.Title}>CONTACT US</div>
          <div className={styles.Description}>
            Enter your name and e-mail below. We can book you a test-drive, tour
            our facility, or even sit down for a chat.
          </div>
        </div>
        <div className={styles.FormWrapper}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formInfo.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your E-mail"
              value={formInfo.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              cols="50"
              placeholder="Message"
              value={formInfo.message}
              onChange={handleChange}
            ></textarea>

            <input className={styles.Submit} type="submit" value="Submit" />
            {success && (
              <div className={styles.SuccessMessage}>
                Your message was sent successfully! Our staff will be in contact
                with you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
