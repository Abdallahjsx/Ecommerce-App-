"use client";

import React from "react";
import styles from "./TextInput.module.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; // error message text
}

const TextInput: React.FC<TextInputProps> = ({ label, error, ...props }) => {
  return (
    <div className={styles.container}>
      {/* Label */}
      <label className={styles.label}>{label}</label>

      {/* Input + Eye Icon */}
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${error ? styles.error : ""}`}
          {...props}
        />
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 3.5C15.173 3.5 18.47 9.2788 18.61 9.5283C18.797 9.8608 18.796 10.2681 18.609 10.6006C18.47 10.8456 15.148 16.625 10 16.625C4.829 16.625 1.532 10.8491 1.391 10.5977C1.205 10.2664 1.203 9.8626 1.388 9.5313C1.524 9.2852 4.799 3.5 10 3.5ZM10 5.6875C6.878 5.6876 4.485 8.7884 3.636 10.0615C4.49 11.3336 6.893 14.4374 10 14.4375C13.103 14.4375 15.506 11.3379 16.363 10.0625C15.508 8.7877 13.105 5.6875 10 5.6875ZM10 7.875C11.208 7.875 12.187 8.8544 12.187 10.0625C12.187 11.2706 11.208 12.25 10 12.25C8.792 12.25 7.812 11.2706 7.812 10.0625C7.812 8.8544 8.792 7.875 10 7.875Z"
            fill="#CDD5DF"
          />
        </svg>
      </div>

      {/* Error Message */}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default TextInput;

