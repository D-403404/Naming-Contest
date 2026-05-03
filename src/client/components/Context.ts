import { createContext } from "react";

interface PageContextType {
  page: "list" | "detail";
  setPage: (page: "list" | "detail") => void;
  contests: Contest[];
  setContests: (contests: Contest[]) => void;
  currentContest: Contest | null;
  setCurrentContest: (contest: Contest | null) => void;
  currentContestId: string;
  setCurrentContestId: (id: string) => void;
}

export const PageContext = createContext<PageContextType>({
  page: "list",
  setPage: (page: "list" | "detail") => {},
  contests: [] as Contest[],
  setContests: (contests: Contest[]) => {},
  currentContest: null as Contest | null,
  setCurrentContest: (contest: Contest | null) => {},
  currentContestId: "",
  setCurrentContestId: (id: string) => {},
});
