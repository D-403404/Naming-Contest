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

export const addNewContest = async (
  contestName: string,
  contestCategory: string,
  description: string,
) => {
  return (
    await axios.post(`${API_SERVER_URL}/api/contests`, {
      contestName,
      contestCategory,
      description,
    })
  ).data.newContest;
};

export const addNewName = async (
  id: string,
  newName: string,
) => {
  return (
    await axios.put(`${API_SERVER_URL}/api/contests/${id}`, {
      newName,
    })
  ).data.updatedContest;
};
