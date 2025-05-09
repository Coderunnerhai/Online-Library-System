import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id.toString() === id)
  );

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;