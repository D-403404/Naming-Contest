import axios from "axios";
import {} from "../config.ts";
import { API_SERVER_URL } from "../public-config.ts";

export const getContests = async () => {
  return (await axios.get(`${API_SERVER_URL}/api/contests`))
    .data;
};

export const getContestById = async (id: string) => {
  return (
    await axios.get(`${API_SERVER_URL}/api/contests/${id}`)
  ).data;
};
