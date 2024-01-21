"use client";
import { useState, useEffect } from 'react';
import axios from '@/axiosConfig';

const useGetData = (apiUrl, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let isMounted = true;  // Flag to track whether the component is mounted

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          withCredentials: true,
          ...options,
        });

        // Check if the component is still mounted before updating state
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        // Check if the component is still mounted before updating state
        if (isMounted) {
          setError(error);
        }
      } finally {
        // Check if the component is still mounted before updating state
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return { data, error, isLoading };
};

export { useGetData };
