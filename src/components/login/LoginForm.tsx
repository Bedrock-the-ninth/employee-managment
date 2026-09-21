// /src/components/login/LoginField.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userExists from "../../core/utils/auth/userExists";
import { setItem } from "../../core/utils/storageUtils";

// Common imports
import Card from "../common/Card";
import Button from "../common/Button";
import InputField from "../common/InputField";

import Alert from "../common/Alert";

const LoginFields = () => {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successState, setSuccessState] = useState<boolean | null>(null);
  // Hooks from React-Router-DOM
  const navigator = useNavigate();

  // Input field change handlers
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setSuccessState(null);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setSuccessState(null);
  };
  // Sign-in button click handler
  const handleClick = () => {
    const userE = userExists({ username, password });
    if (userE.length > 0) {
      const hasSetItem = setItem("userdata", JSON.stringify(userE[0]));
      if (hasSetItem == 0) {
        setSuccessState(true);
        setTimeout(() => {
          navigator("/dashboard");
        }, 1500);
      }
    } else {
      setSuccessState(false);
    }
  };
  // UI JSX RETURN
  return (
    <Card className="my-4 py-3 col-10 col-md-8 col-lg-3">
      {successState && (
        <Alert kind="success" msg={`User ${username} was logged in!`} />
      )}
      {successState === false && (
        <Alert kind="danger" msg="Username/Password is wrong, try again!" />
      )}
      <form className="d-flex flex-column align-items-center">
        <InputField
          label="username"
          type="text"
          onChange={handleUsernameChange}
        />
        <InputField
          label="password"
          type="password"
          onChange={handlePasswordChange}
        />
        <Button type="button" onClick={handleClick} className="w-50">
          Sign-in
        </Button>
      </form>
    </Card>
  );
};

export default LoginFields;
