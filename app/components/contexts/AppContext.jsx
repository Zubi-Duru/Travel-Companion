"use client";
import { useRouter,usePathname } from "next/navigation";
import { createContext, useReducer, useEffect } from "react";
import { getData } from "@/utils/fetchData";
import isEqual from "@/utils/isEqual";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const pathname=usePathname()

  // Use a callback to get the latest value from localStorage
  const getStoredUser = () =>
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || null
      : null;

  const [state, dispatch] = useReducer(authReducer, {
    user: getStoredUser(),
  });

  useEffect(() => {
    const fetchDataAndRedirect = async () => {
      try {
        if (state.user) {
          const apiUrl = `user/${state.user._id}`;
          const { data: userData, error } = await getData(apiUrl);
  
          if (error) {
            console.error("Error fetching user data:", error);
          } else {
            // Check if userData is different from state.user before dispatching
            if (!isEqual(userData, state.user)) {
              // Fetched data
              dispatch({
                type: "LOGIN",
                payload: { ...userData },
              });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    const delayedRedirect = setTimeout(() => {
      // Redirect to the login page if the user is not logged in
      if (!state.user && (pathname !== "/" && pathname !== "/profile-setup")) {
        router.push("/auth");
      }
    }, 10000); // 10 seconds delay
  
    // Uncomment the following line to fetch user data
    fetchDataAndRedirect();
  
    // Cleanup the timeout on component unmount
    return () => clearTimeout(delayedRedirect);
  }, [state.user, pathname, router]);
  

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
