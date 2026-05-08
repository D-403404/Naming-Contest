import { useContext, useEffect } from "react";
import { PageContext } from "./Context.ts";
import { deleteName, getContestById } from "../api-client.ts";
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

  const handleNameClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    const nameId = event.currentTarget.textContent?.toLowerCase().replace(/\s+/g, "-");
    deleteName(currentContestId, nameId)
      .then((data) => {
        console.log("Updated Contest after deletion:", data.updatedContest);
        console.log("Deleted name:", data.deletedName);
        setCurrentContest(data.updatedContest);
      })
      .catch((error) => {
        console.error("Error deleting name:", error);
      });
  }

  return (
    <div className="contest">
      <div className="title">Description</div>
      <div className="description">
        {currentContest?.description}
      </div>
      <div className="title">Submitted Names</div>
      <div className="body list">
        {currentContest?.names?.map((name) => (
          <div key={name.id} className="item link" onClick={handleNameClick}>
            {name.name}
          </div>
        ))}
      </div>
      <AddNameForm id={currentContestId} />
    </div>
  );
};

export default ContestDetail;
