import { useContext, useEffect } from "react";
import { PageContext } from "./components/Context.ts";
import ContextProvider from "./components/ContextProvider.tsx";

import Header from "./components/Header.tsx";
import DetailPage from "./components/DetailPage.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import ContestList from "./components/ContestList.tsx";

export const App = ({ initialData }: { initialData: any }) => {
  if (!initialData) {
    return <NotFoundPage />;
  }

  return (
    <ContextProvider initialData={initialData}>
      <PageContent />
    </ContextProvider>
  );
};

const PageContent = () => {
  const {
    page,
    setPage,
    currentContest,
    setCurrentContest,
    setCurrentContestId,
  } = useContext(PageContext);

  useEffect(() => {
    window.onpopstate = (event) => {
      console.log(event);
      console.log("currentContest:", currentContest);
      if (event.state && event.state.currentContestId) {
        setPage("detail");
      } else {
        setPage("list");
      }
      // setCurrentContest(event.state?.currentContest);
      setCurrentContestId(event.state?.currentContestId);
    };
  }, []);

  let content;
  switch (page) {
    case "list":
      content = <ContestList />;
      break;
    case "detail":
      content = <DetailPage />;
      break;
    default:
      content = <NotFoundPage />;
  }

  return (
    <>
      <Header
        content={
          page === "list"
            ? "Naming Contests"
            : currentContest?.contestName || "Contest Detail"
        }
      />
      <main>{content}</main>
    </>
  );
};
