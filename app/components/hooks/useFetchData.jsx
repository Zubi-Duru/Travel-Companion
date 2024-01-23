"use client";
import { useState, useEffect } from "react";
import axios from "@/axiosConfig";
// Assuming useAuthContext provides the authentication state including the token
import { useAuthContext } from "./useAuthContext";

const useGetData = (apiUrl, options = {}) => {
  const {token} = useAuthContext(); // Get the token from the authentication context
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get(apiUrl, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            ...options,
          });

          if (isMounted) {
            setData(response.data);
            if(apiUrl.startsWith("/user")){
              dispatch({ type: "UPDATE_USER", payload: response.data })
            }

          }
        } catch (error) {
          if (isMounted) {
            setError(error);
          }
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl, token]);

  return { data, error, isLoading };
};

export { useGetData };
