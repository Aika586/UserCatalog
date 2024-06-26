import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignUp.module.css"


interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  error?: boolean;

}

const Input: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  id,
  error=false
 
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.input_wrapper}>
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value}
        onChange={onChange}  
        style={isPasswordVisible ? {} : { fontFamily: "monospace" }}
        name={id}              
        id={id}
       className={`${styles.input} ${error ? styles.errorInput : ""}`}/>
      {type === "password" && (
        <span
          onClick={handleToggleVisibility}
          className={styles.eyeIcon}
        >
        <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
        </span>
      )}
      </div>
    </div>
  );
};

export default Input;
