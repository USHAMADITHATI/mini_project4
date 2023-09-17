// Form.js
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here

    // Display data below the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* Add other form fields here */}
        <button type="submit">Submit</button>
      </form>
      {/* Display user input data here */}
    </div>
  );
}

export default Form;
