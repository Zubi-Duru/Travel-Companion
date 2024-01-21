import axios from "@/axiosConfig";

const getData = async (apiUrl, options = {}) => {
  try {
    const response = await axios.get(apiUrl, {
      withCredentials: true,
      ...options,
    });
    return { data: response.data, error: null }; // Assuming user data is in the response data
  } catch (error) {
    return { data: null, error: error.response.data };
  }
};

const postData = async (apiUrl, data, options = {}) => {
  try {
    const response = await axios.post(apiUrl, data, {
      withCredentials: true,
      ...options,
    });

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response.data };
  }
};
const patchData = async (apiUrl, data, options = {}) => {
  try {
    const response = await axios.patch(apiUrl, data, {
      withCredentials: true,
      ...options,
    });

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response.data };
  }
};

const deleteData = async (apiUrl, options = {}) => {
  try {
    const response = await axios.delete(apiUrl, {
      withCredentials: true,
      ...options,
    });

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response.data };
  }
};

export { getData,postData, patchData, deleteData };
