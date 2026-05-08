import ContestCard from "./ContestCard.tsx";
import { useContext, useEffect } from "react";
import { getContests } from "../api-client.ts";
import { PageContext } from "./Context.ts";
import AddContestForm from "./AddContestForm.tsx";

const ContestList = () => {
  const { contests, setContests } = useContext(PageContext);

  useEffect(() => {
    if (contests.length > 0) {
      console.log("Contests already loaded");
      return;
    }

    console.log("Fetch contests");

    getContests()
      .then((data) => {
        setContests(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log("Rerender");

  return (
    <div className="contest-preview-list">
      <ul>
        {contests?.map((contest: Contest) => (
          <li key={contest.id}>
            <ContestCard contest={contest} />
          </li>
        ))}
      </ul>
      <AddContestForm />
    </div>
  );
};

export default ContestList;
