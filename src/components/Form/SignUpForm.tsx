import Input from "./Input";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useRegisterUserMutation } from "../../services/users";
import { setToken } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@reqres\.in$/;
    if (!formData.email) {
      setEmailError("Требуется электронная почта");
      return false;
    } else if (!emailPattern.test(formData.email)) {
      setEmailError("Неверный формат электронной почты");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) {
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    try {
      const { name, email, password } = formData;
      const response = await registerUser({ email, password }).unwrap();
      dispatch(setToken(response.token));
      localStorage.setItem("name", name);
      navigate("/users");
    } catch (err) {
      setError("Регистрация не удалась");
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}>Регистрация</p> {/* This is the title */}
        <Input
          label="Имя"
          type="text"
          value={formData.name}
          id="name"
          onChange={handleChange}
        />
        <Input
          label="Электронная почта"
          type="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          error={!!emailError}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
        <Input
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          error={!!error}
        />
        <Input
          label="Подтвердите пароль"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          error={!!error}
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.button_container}>
          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
