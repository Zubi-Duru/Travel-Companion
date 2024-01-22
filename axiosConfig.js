import axios from 'axios';
import "dotenv/config";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASEURL}`,
});

export default instance;

