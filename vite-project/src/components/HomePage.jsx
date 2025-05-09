import React from 'react';
import { Link } from 'react-router-dom';
import mockBooks from '../utils/mockData';

const HomePage = () => {
  const categories = [...new Set(mockBooks.map(book => book.category))];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to the Book Library 📚</h1>
      <h2>Explore by Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category} style={{ margin: '0.5rem 0' }}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;