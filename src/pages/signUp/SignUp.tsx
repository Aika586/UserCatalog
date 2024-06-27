import SignUpForm from "../../components/Form/SignUpForm";
import { Outlet } from "react-router-dom";
const SignUp = () => {
  return (
    <>
  <SignUpForm />;
  <Outlet/>
  </>)
};

export default SignUp;
