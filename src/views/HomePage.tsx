import classes from "./HomePage.module.scss";
import logo from "../logo.svg";
import SignOut from "../components/SignOut";
import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/sign-in");
    }
  }, [user, navigate, isLoading]);

  return (
    <>
      <div className={classes["sign-out"]}>
        <SignOut />
      </div>
      <div className={classes["main-container"]}>
        Welcome to the application dear{" "}
        <span className={classes.username}>{user?.name}</span>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
    </>
  );
};

export default HomePage;
