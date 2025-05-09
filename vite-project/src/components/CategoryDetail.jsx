import React from 'react';
import { useParams, Link } from 'react-router-dom';
import mockBooks from '../utils/mockData';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const filteredBooks = mockBooks.filter(book => book.category === categoryName);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Books in "{categoryName}" Category</h2>

      <div style={{ margin: '1rem 0' }}>
        <Link to="/browse">
          <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>← Back to Browse</button>
        </Link>
      </div>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDetail;