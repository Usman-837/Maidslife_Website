import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx"

const SubmitPopup = ({ toggleSubmitPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted Data:', formData);
    alert('Form Submitted Successfully!');
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className="text-xl font-semibold mb-4">Submit Your Details</h1>
        <RxCross2 className='text-2xl font-semibold' onClick={toggleSubmitPopup} />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter Name'
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email'
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block text-gray-700 font-medium">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder='Contact number'
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='Enter Address'
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-white font-bold rounded-md hover:bg-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitPopup;
