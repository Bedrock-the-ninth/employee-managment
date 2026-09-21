// Component Import (form logic and UI)
import LoginForm from "./LoginForm";
// Image import
import Logo from "../../assets/images/logo/logo.png";

const login = () => {
  return (
    <div className="mt-2 d-flex flex-column align-items-center">
      <div id="login-header" className="text-center">
        <img src={Logo} alt="Quera's Logo" className="col-1" />
        <h4>Sign-in to Quera Employee Management:</h4>
      </div>
      <LoginForm />
    </div>
  );
};

export default login;
