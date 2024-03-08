const CreateBook = ({ onCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onCreate(formProps);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto grid grid-cols-2 px-4 py-3 shadow-sm rounded-lg bg-white gap-2"
    >
      <input
        className="border text-sm rounded-md p-2"
        placeholder="Title"
        required
        name="title"
      />
      <input
        className="border text-sm rounded-md p-2"
        placeholder="Description"
        name="description"
      />
      <input
        className="border text-sm rounded-md p-2"
        placeholder="Thumbnail"
        name="thumbnail"
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        + Add
      </button>
    </form>
  );
};

export default CreateBook;
