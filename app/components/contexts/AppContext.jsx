"use client";
import { useRouter, usePathname } from "next/navigation";
import { createContext, useReducer, useEffect } from "react";
import { getData } from "@/utils/fetchData";
import isEqual from "@/utils/isEqual";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { token } = action.payload;
      localStorage.setItem("token", token);
      return { ...state, token };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { user: null, token: null };
    case "UPDATE_USER":
      const updatedUser = action.payload;
      return { ...state, user: updatedUser };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const getStoredToken = () => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      return storedToken ? storedToken : null;
    }
    return null
  };
  
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: getStoredToken(),
  });

  useEffect(() => {
    const tokenRefetchInterval = setInterval(() => {
      // Fetch the token from localStorage
      const newToken = localStorage.getItem("token") || null;
  
      if (newToken) {
        // If the token has changed, dispatch a login action with the user payload
        if (newToken !== token) {
          dispatch({ type: "LOGIN", payload: { token} });
        }
      } else {
        // If there's no token, dispatch a logout action
        dispatch({ type: "LOGOUT" });
        router.push("/auth")
      }
    }, 600000); // Refetch every 10 minutes
  
    // Cleanup the interval on component unmount
    return () => clearInterval(tokenRefetchInterval);
  }, [state.token]);
  

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
