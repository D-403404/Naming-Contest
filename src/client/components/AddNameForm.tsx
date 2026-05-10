import React, { useContext } from "react";
import { addNewName } from "../api-client.ts";
import { PageContext } from "./Context.ts";

const AddNameForm = ({ id }: { id: string }) => {
  const { currentContest, setCurrentContest } =
    useContext(PageContext);

  if (!currentContest) return;

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(
      event.target as HTMLFormElement,
    );
    const name = formData.get("name") as string;
    if (
      currentContest.names.find(
        (nameObj) =>
          nameObj.id === name.toLowerCase().replace(/\s+/g, "-"),
      )
    ) {
      alert("Name already exists!");
      return;
    }

    addNewName(id, name)
      .then((updatedContest) => {
        console.log("Updated Contest:", updatedContest);
        setCurrentContest(updatedContest);
      })
      .catch((error) => {
        console.error("Error adding new name:", error);
      });
  };

  return (
    <div>
      <div className="title">Propose a New Name</div>
      <form className="body" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
};

export default AddNameForm;
