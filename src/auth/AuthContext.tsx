import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { fetchUserData } from "../services/userService";
import { useLocation, useNavigate } from "react-router-dom";
import { signout } from "../services/authService";

interface AuthContextProps {
  user: null | { name: string };
  setUser: React.Dispatch<React.SetStateAction<{ name: string } | null>>;
  isLoading: boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    if (location.pathname !== "/sign-in" && location.pathname !== "/sign-up") {
      const checkUser = async () => {
        try {
          const userData = await fetchUserData();

          setUser(userData.data);
        } catch (error) {
          setUser(null);
        }
        setIsLoading(false);
      };

      checkUser();
    }
  }, [location.pathname]);

  const signOut = async () => {
    try {
      await signout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
    localStorage.removeItem("jwt_token");
    setUser(null);
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
