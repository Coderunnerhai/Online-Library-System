import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBook } from "../utils/booksSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
      type='text'
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <input
      type='text'
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;