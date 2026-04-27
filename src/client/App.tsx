import { useState } from "react";
import ContestsList from "./components/ContestsList.tsx";
import Header from "./components/Header.tsx";

export const App = ({ initialData }: { initialData: any[] }) => {
  const [contests, setContests] = useState(initialData);

  return (
    <>
      <Header content="App header" />
      <main>
        <ContestsList
          contests={contests}
          setContests={setContests}
        />
      </main>
    </>
  );
};
