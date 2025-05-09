Online Library System

A modern, full-featured online library system built with React, Redux, React Router. This web application allows users to browse books by category, view book details, add new books to the library, and navigate through various pages seamlessly.

Features

Home Page: Includes a welcome message, book categories, and a navigation bar.
Browse Books Page: Allows users to filter and search books by title.
Book Details Page: Displays detailed information about a book, including title, author.
Add Book Page: Form to add a new book, with validation and state management using Redux.
404 Page: Displays a custom page for any undefined routes.

Technologies Used

React: JavaScript library for building user interfaces.
Redux: For state management across the application.
React Router: For navigation and dynamic routing.
React-Redux: To integrate Redux state management into React components.

Installation

Follow the steps below to run the project locally.

Clone the Repository

git clone https://github.com/Coderunnerhai/Online-Library-System.git

Install Dependencies

Navigate to the project directory and install the required dependencies:

cd Online-Library-System
npm i

Project Structure

/src
  /components          # React components (HomePage, BrowseBooks, BookDetails, etc.)
  App.jsx               # Main app component with routing
  main.jsx             # Entry point for React application

  Features in Detail

  Home Page

  Displays a welcome message.
Shows book categories as links, each linked to the corresponding category's book list.
Includes a Browse Books button that navigates to the Browse Books page.

Browse Books Page

Lists all books, filtered by selected category or search term.
Allows filtering by title.
Each book has a link to view its details.

Book Details Page

Lists all books, filtered by selected category.
Allows filtering by title.
Each book has a link to view its details.

Book Details Page

Displays detailed information about a specific book, including:
Title
Author

Includes a Back to Browse button to navigate back to the book list.

Add Book Page

Provides a form to add a new book with fields like title, author, category.
Validates the form fields and prevents submission until all fields are filled.
On successful submission, redirects to the Browse Books page, and the new book appears in the list.

404 Page

Shows a 404 error when a user navigates to an undefined route.
Provides a link to return to the Home page.

Contributing

Feel free to fork this repository and make changes. If you'd like to contribute, please submit a pull request.

Guidelines

Ensure code follows the project style.
Make sure all features are tested.
Follow standard Git workflows.

Acknowledgements

React and Redux for building the application architecture.
React Router for handling navigation.