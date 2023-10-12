import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../components/form/Form.module.scss";
import FormContainer from "../components/form/FormContainer";
import { getFormInputs } from "../utils/formConfig";
import { signin } from "../services/authService";
import { useNavigate } from "react-router-dom";
import formClasses from "../components/form/Form.module.scss";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (data: Record<string, string>) => {
    try {
      const response = await signin(data);

      if (response.data.accessToken) {
        localStorage.setItem("jwt_token", response.data.accessToken);
        navigate("/");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during signup");
      }
    }
  };

  const formInputs = getFormInputs("email", "password");

  const footerProps = {
    buttonText: "Sign In",
    linkText: "Create a new account?",
    linkTo: "sign-up",
  };

  return (
    <Card>
      <h2 className={classes.title}>SignIn</h2>
      <FormContainer
        inputs={formInputs}
        footer={footerProps}
        onSubmit={handleFormSubmit}
      />
      {error && <p className={formClasses.error}>{error}</p>}
    </Card>
  );
};

export default SignIn;
