import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BrowseBooks from './components/BrowseBooks';
import AddBook from './components/AddBook';
import CategoryDetail from './components/CategoryDetail';
import BookDetails from "./components/BookDetails";
import NotFound from './components/NotFound';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryName" element={<CategoryDetail />} />
      <Route path="/browse" element={<BrowseBooks />} />
      <Route path="/browse/:categoryName" element={<BrowseBooks />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;