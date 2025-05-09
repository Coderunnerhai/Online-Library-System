import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>📚 Book Library</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/browse" style={styles.link}>Browse Books</Link>
        <Link to="/add" style={styles.link}>Add Book</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 2rem',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Navbar;