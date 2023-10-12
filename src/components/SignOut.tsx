import { useAuth } from "../auth/AuthContext";
import classes from "./SignOut.module.scss";

const SignOut = () => {
  const { signOut } = useAuth();

  return (
    <button onClick={signOut} className={classes["signout-btn"]}>
      SignOut
    </button>
  );
};

export default SignOut;
