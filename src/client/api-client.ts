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
  id: string,
  contestName: string,
  categoryName: string,
  description: string,
) => {
  return (
    await axios.post(`${API_SERVER_URL}/api/contests`, {
      id,
      contestName,
      categoryName,
      description,
    })
  ).data.newContest;
};

export const addNewName = async (
  id: string,
  newName: string,
) => {
  return (
    await axios.post(
      `${API_SERVER_URL}/api/contests/${id}/names`,
      {
        newName,
      },
    )
  ).data.updatedContest;
};

export const deleteName = async (
  contestId: string,
  nameId: string,
) => {
  return (
    await axios.delete(
      `${API_SERVER_URL}/api/contests/${contestId}/names/${nameId}`,
    )
  ).data;
};
