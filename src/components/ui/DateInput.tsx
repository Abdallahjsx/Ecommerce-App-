"use client";
import React from "react";
import styles from "./DateInput.module.css";
import DateIcon from "../../../public/assets/images/Date-icon.svg";

interface DateInputProps {
  label?: string;
  error?: string;
}

const DateInput: React.FC<DateInputProps> = ({ label = "Birthday", error }) => {
  console.log("ere"+DateIcon)
  console.log(DateIcon.src)
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrapper}>
        <input type="text" placeholder="DD/MM/YYYY" className={styles.input} />

        {/* أيقونة الكاليندر */}
        <div className={styles.icon} style={{display:"flex"}}>
         <img src={DateIcon.src} alt="date" style={{alignSelf:"center"}}/>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default DateInput;
