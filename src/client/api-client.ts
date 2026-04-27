import axios from "axios";
import { SERVER_URL } from "../config.ts";

export const getContests = async () => {
  return (await axios.get(`${SERVER_URL}/api/contests`)).data;
};
