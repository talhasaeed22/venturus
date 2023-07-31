import React from "react";
import styles from "./Modal.module.css";
import buttonStyles from "./Modal.module.css";

const Alert = ({ message, setError }) => {
  return (
    <>
      <div className={styles.alertModalContainer}>
        <div className={styles.alertModal}>
          <h1>Warning</h1>
          <p>{message}</p>
          <button
            onClick={setError}
            className={buttonStyles.btn}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
