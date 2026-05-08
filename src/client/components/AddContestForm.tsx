import React, { useContext, useState } from "react";
import { addNewContest } from "../api-client.ts";
import { PageContext } from "./Context.ts";

const AddContestForm = () => {
  const { setCurrentContest } = useContext(PageContext);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(
      event.target as HTMLFormElement,
    );
    const contestName = formData.get("contestName") as string;
    const id = contestName.toLowerCase().replace(/\s+/g, "-");
    const categoryName = formData.get("categoryName") as string;
    const description = formData.get("description") as string;
    addNewContest(id, contestName, categoryName, description)
      .then((newContest) => {
        console.log("New Contest:", newContest);

        setCurrentContest(newContest);
        window.history.pushState(
          { currentContestId: newContest.id },
          "",
          `/contest/${newContest.id}`,
        );
      })
      .catch((error) => {
        console.error("Error adding new contest:", error);
      });
  };

  return showForm ? (
    <div>
      <div className="add-new-contest">
        {/* <div className="title">Propose a New Contest</div> */}
        <form onSubmit={handleSubmit}>
          <input
            name="contestName"
            type="text"
            placeholder="Enter name"
          />
          <input
            name="categoryName"
            type="text"
            placeholder="Enter category"
          />
          <textarea
            name="description"
            placeholder="Enter description"
          />
          <button type="submit">Add Contest</button>
        </form>
      </div>
      <div className="link" onClick={() => setShowForm(false)}>
        Close Form
      </div>
    </div>
  ) : (
    <div className="link" onClick={() => setShowForm(true)}>
      Add New Contest
    </div>
  );
};

export default AddContestForm;
