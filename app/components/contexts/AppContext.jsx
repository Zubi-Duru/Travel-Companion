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
      localStorage.removeItem("user");
      return { user: null, token: null };
    case "UPDATE_USER":
      const updatedUser = action.payload;
      localStorage.removeItem("user");
      let jsonData=JSON.stringify(updatedUser)
      localStorage.setItem("user", jsonData );
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
    return null;
  };

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: getStoredToken(),
  });

  useEffect(() => {
    const storedToken = getStoredToken();
  
    const initializeAuth = async () => {
      try {
        if (storedToken) {
          // If there's a token, dispatch a login action
          dispatch({ type: "LOGIN", payload: { token: storedToken } });
  
          // Fetch user data or perform other necessary actions
          const userData = localStorage.getItem("user");
          const userDataObj= JSON.parse(userData) // Replace with your actual logic
  
          console.log(userData,"hi");
          // Dispatch an action to update the user data if needed
          dispatch({ type: "UPDATE_USER", payload: userDataObj });
        } else {
          // If there's no token, dispatch a logout action
          dispatch({ type: "LOGOUT" });
  
          // Redirect to the authentication page
          router.push("/auth");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      }
    };
  
    initializeAuth();
  }, []); // Empty dependency array ensures this runs only once on component mount
  

  useEffect(() => {
    const tokenRefetchInterval = setInterval(() => {
      // Fetch the token from localStorage
      const newToken = localStorage.getItem("token") || null;

      if (newToken && newToken !== state.token) {
        // If the token has changed, dispatch a login action with the user payload
        dispatch({ type: "LOGIN", payload: { token: newToken } });
      } else if (!newToken) {
        // If there's no token, dispatch a logout action
        dispatch({ type: "LOGOUT" });
        router.push("/auth");
      }
    }, 600000); // Refetch every 10 minutes

    // Cleanup the interval on component unmount
    return () => clearInterval(tokenRefetchInterval);
  }, [state.token, router]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
