import React from "react";
import styles from "./Spinner.module.css";



const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}

export default LoadingSpinner