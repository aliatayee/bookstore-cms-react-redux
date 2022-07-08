import React from 'react';

const Form = () => (

  <form>
    <div className="grid grid-cols-3 gap-1">
      <div><input type="email" className="form-input px-20 py-2 rounded" /></div>
      <div><input type="email" className="form-input px-4 py-2 rounded" /></div>
      <div><button type="button" className="form-input px-12 py-2 bg-blue-500 border-none text-white rounded">Add</button></div>
    </div>
  </form>
);
export default Form;
