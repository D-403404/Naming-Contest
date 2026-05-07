import React from "react";
import { addNewName } from "../api-client.ts";

const AddNameForm = ({ id }: { id: string }) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(
      event.target as HTMLFormElement,
    );
    const name = formData.get("name") as string;
    addNewName(id, name)
      .then((updatedContest) => {
        console.log("Updated Contest:", updatedContest);
      })
      .catch((error) => {
        console.error("Error adding new name:", error);
      });
  };

  return (
    <div className="add-new-contest">
      <div className="title">Propose a New Name</div>
      <form onSubmit={handleSubmit}>
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
