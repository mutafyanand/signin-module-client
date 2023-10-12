import HomePage from "../views/HomePage";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
];

export default routes;
