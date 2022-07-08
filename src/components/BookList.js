import React from 'react';

const BookList = () => (
  <div className="mb-5 mt-5 ">
    <div className="bg-white p-3 border rounded">
      <div className="grid grid-cols-2">
        <div className="grid">
          <span className="text-gray-400">Action</span>
          <h2 className="font-bold text-lg">The Hunger Games</h2>
          <p className="text-blue-400">Suzanne Collins</p>
          <div className="md:flex pt-3 pb-3 text-blue-400">
            <p className="md:pr-3 md:border-r-2">Comments</p>
            <p className="md:pr-3 md:pl-3 md:border-r-2">Remove</p>
            <p className="md:pr-3 md:pl-3 md:border-r-2">Edit</p>
          </div>
        </div>
        <div>sdhh</div>
      </div>
    </div>
  </div>
);
export default BookList;
