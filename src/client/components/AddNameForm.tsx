import React from "react";

const AddNameForm = () => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formData = new FormData(
      event.target as HTMLFormElement,
    );
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
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
        <textarea
          name="description"
          placeholder="Enter description"
        ></textarea>
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
};

export default AddNameForm;
