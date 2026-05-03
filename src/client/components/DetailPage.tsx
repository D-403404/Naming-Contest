import { useContext } from "react";
import { PageContext } from "./Context.ts";
import ContestDetail from "./ContestDetail.tsx";

const DetailPage = () => {
  const { setPage, setCurrentContest } = useContext(PageContext);

  const handleContestListClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    // Handle navigation back to contest list if needed
    window.history.pushState({}, "", "/");
    setPage("list");
    setCurrentContest(null); // Clear current contest when navigating back
  };

  return (
    <>
      <ContestDetail />
      <a
        href="/"
        className="link"
        onClick={handleContestListClick}
      >
        Return to contest list
      </a>
    </>
  );
};

export default DetailPage;
