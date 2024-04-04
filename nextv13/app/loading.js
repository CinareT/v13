import React from "react";
import styles from "./style.module.css";

export default function Loading() {
     return (
          <div className={styles.spinnerWrapper}>
               <div className={styles.spinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

               </div>

          </div>
     );
}