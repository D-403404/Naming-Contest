import { useContext, useEffect, useState } from "react";
import { PageContext } from "./components/Context.ts";
import ContextProvider from "./components/ContextProvider.tsx";

import Header from "./components/Header.tsx";
import DetailPage from "./components/DetailPage.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import ContestList from "./components/ContestList.tsx";

export const App = ({ initialData }: { initialData: any }) => {
  return (
    <ContextProvider initialData={initialData}>
      <Header content="App header" />
      <main>
        <PageContent />
      </main>
    </ContextProvider>
  );
};

const PageContent = () => {
  const {
    page,
    setPage,
    setCurrentContest,
    setCurrentContestId,
  } = useContext(PageContext);

  useEffect(() => {
    window.onpopstate = (event) => {
      if (event.state && event.state.currentContest) {
        setPage("detail");
      } else {
        setPage("list");
      }
      setCurrentContest(event.state?.currentContest);
      setCurrentContestId(event.state?.currentContest?.id);
    };
  }, []);

  switch (page) {
    case "list":
      return <ContestList />;
    case "detail":
      return <DetailPage />;
    default:
      return <NotFoundPage />;
  }
};
