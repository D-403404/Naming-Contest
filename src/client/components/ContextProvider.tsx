import { useState } from "react";
import { PageContext } from "./Context.ts";

const ContextProvider = ({
  initialData,
  children,
}: {
  initialData: any;
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState<"list" | "detail">(
    initialData.currentContest ? "detail" : "list",
  );
  const [contests, setContests] = useState<Contest[]>(
    initialData.contests || [],
  );
  const [currentContest, setCurrentContest] =
    useState<Contest | null>(
      initialData.currentContest || null,
    );
  const [currentContestId, setCurrentContestId] =
    useState<string>(initialData.currentContest?.id || "");
  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        contests,
        setContests,
        currentContest,
        setCurrentContest,
        currentContestId,
        setCurrentContestId,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default ContextProvider;
