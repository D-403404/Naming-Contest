import { useContext } from "react";
import { PageContext } from "./Context.ts";

const ContestCard = ({ contest }: { contest: Contest }) => {
  const { setPage, setCurrentContestId } =
    useContext(PageContext);

  const handleContestClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    // Handle contest click logic here
    window.history.pushState(
      { currentContestId: contest.id },
      "",
      `/contest/${contest.id}`,
    );
    setPage("detail");
    setCurrentContestId(contest.id);
  };

  return (
    <div
      className="contest-preview"
      onClick={handleContestClick}
    >
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestCard;
