"use client";
import React from "react";
import styles from "./DateInput.module.css";

interface DateInputProps {
  label?: string;
  error?: string;
}

const DateInput: React.FC<DateInputProps> = ({ label = "Birthday", error }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className={styles.input}
        />

        {/* أيقونة الكاليندر */}
        <div className={styles.icon}>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* المربع الخارجي */}
            <rect
              x="0.5"
              y="2.5"
              width="13"
              height="11"
              stroke="#CDD5DF"
              strokeWidth="1.5"
              fill="none"
              rx="1"
            />

            {/* العصاية اليسار */}
            <line
              x1="3.5"
              y1="0.5"
              x2="3.5"
              y2="4.5"
              stroke="#CDD5DF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* العصاية اليمين */}
            <line
              x1="10.5"
              y1="0.5"
              x2="10.5"
              y2="4.5"
              stroke="#CDD5DF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* الخط العمودي في المنتصف */}
            <line
              x1="7"
              y1="5.5"
              x2="7"
              y2="10.5"
              stroke="#CDD5DF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* الخط الأفقي في المنتصف */}
            <line
              x1="4.5"
              y1="8"
              x2="9.5"
              y2="8"
              stroke="#CDD5DF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default DateInput;





