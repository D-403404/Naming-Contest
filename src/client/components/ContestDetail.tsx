import { useContext, useEffect } from "react";
import { PageContext } from "./Context.ts";
import { getContestById } from "../api-client.ts";

const ContestDetail = () => {
  const { currentContest, setCurrentContest, currentContestId } =
    useContext(PageContext);

  useEffect(() => {
    if (currentContest) {
      console.log("Current contest loaded:", currentContest.id);
      return;
    }

    console.log("Fetch current contest");

    // Fetching current contest details
    getContestById(currentContestId)
      .then((data) => {
        console.log("Current contest data:", data);
        setCurrentContest(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentContest?.id]);

  return (
    <div className="contest">
      <div className="title">Description</div>
      <div className="description">
        {currentContest?.description}
      </div>
      <div className="title">Submitted Names</div>
      <div className="body list">
        {currentContest?.names.map((name) => (
          <div key={name.id} className="item">
            {name.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestDetail;
