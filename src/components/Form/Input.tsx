import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;

}

const Input: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  id,
 
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value}
        onChange={onChange}
        style={isPasswordVisible ? {} : { fontFamily: "monospace" }}
        name={id}
        id={id}
        required={id !== "name"}
      />
      {type === "password" && (
        <span
          onClick={handleToggleVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
        <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
        </span>
      )}
    </div>
  );
};

export default Input;
