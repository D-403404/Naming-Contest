import ContestCard from "./ContestCard.tsx";
import { useEffect } from "react";
import { getContests } from "../api-client.ts";

const ContestsList = ({
  contests,
  setContests,
}: {
  contests: Contest[];
  setContests: Function;
}) => {
  useEffect(() => {
    console.log("Fetch contests");
    // getContests()
    //   .then((data) => {
    //     setContests(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  console.log("Rerender");

  return (
    <div className="contest-preview-list">
      <h3>Contests List</h3>
      <ul>
        {contests?.map((contest: Contest) => (
          <li key={contest.id}>
            <ContestCard contest={contest} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestsList;
