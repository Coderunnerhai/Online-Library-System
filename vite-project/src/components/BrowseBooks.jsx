import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const BrowseBooks = () => {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredByCategory = category
    ? allBooks.filter((book) => book.category === category)
    : allBooks;

  const filteredBooks = filteredByCategory.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>{category ? `Books in ${category}` : "All Books"}</h2>

      <input
        type="text"
        placeholder="Search books by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;