import Input from "./Input";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useRegisterUserMutation } from "../../services/users";
import { setToken } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { name, email, password} = formData; // Extract email and password from formData
      const response = await registerUser({ email, password }).unwrap();
      dispatch(setToken(response.token));
      localStorage.setItem('name', name);
      navigate('/users')


    } catch (err) {
      setError("Sign up failed");
    }
  };

  return (
    <div>
      <h2>Регистрация</h2> {/* This is the title */}
      <form onSubmit={handleSubmit}>
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
         
        />{" "}
        {/* Use the new InputField component */}
        <Input
          label="Пароль"
          type="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
      
        />
        <Input
          label="Подтвердите пароль"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
        />
        {error && <p>{error}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default SignUpForm;
