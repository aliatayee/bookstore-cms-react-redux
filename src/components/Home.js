import React from 'react';
import BookList from './BookList';
import Form from './Form';

const Home = () => (
  <div className="container px-4 mx-auto">
    <BookList />
    <Form />
  </div>
);

export default Home;
