import { useContext, useEffect } from "react";
import { PageContext } from "./Context.ts";
import { getContestById } from "../api-client.ts";
import AddNameForm from "./AddNameForm.tsx";

const ContestDetail = () => {
  const { currentContest, setCurrentContest, currentContestId } =
    useContext(PageContext);

  useEffect(() => {
    // Check if current contest is already stored in context
    if (
      currentContest &&
      currentContest.id === currentContestId
    ) {
      console.log("Current contest loaded:", currentContest);
      return;
    }

    console.log("Fetch current contest:", currentContestId);

    // Fetching current contest details
    getContestById(currentContestId)
      .then((data) => {
        console.log("Current contest data:", data);
        setCurrentContest(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="contest">
      <div className="title">Description</div>
      <div className="description">
        {currentContest?.description}
      </div>
      <div className="title">Submitted Names</div>
      <div className="body list">
        {currentContest?.names?.map((name) => (
          <div key={name.id} className="item">
            {name.name}
          </div>
        ))}
        <AddNameForm id={currentContestId} />
      </div>
    </div>
  );
};

export default ContestDetail;
