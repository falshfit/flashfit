import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    area: '',
    frequency: [],
    shopFor: [],
    deliveryApp: '',
    favoriteStore: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'frequency') {
      setFormData((prev) => ({
        ...prev,
        frequency: checked
          ? [...prev.frequency, value]
          : prev.frequency.filter((item) => item !== value)
      }));
    } else if (type === 'checkbox' && name === 'shopFor') {
      setFormData((prev) => ({
        ...prev,
        shopFor: checked
          ? [...prev.shopFor, value]
          : prev.shopFor.filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit triggered");
    e.preventDefault();

    console.log("formData: ", formData);    try {
      await addDoc(collection(db, 'surveyResponses'), formData);
      alert('Survey submitted successfully!');
      setFormData({
        name: '',
        instagram: '',
        area: '',
        frequency: [],
        shopFor: [],
        deliveryApp: '',
        favoriteStore: '',
        contact: ''
      });
    } catch (error) {
      console.error( error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">FlashFit Survey Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            1. What is your name?
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">
            2. What's your Instagram handle? (optional)
          </label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
            3. Which area of Hyderabad are you in?
          </label>
          <select
            name="area"
            id="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Select --</option>
            <option value="Gachibowli">Gachibowli</option>
            <option value="Kukatpally">Kukatpally</option>
            <option value="Jubilee Hills">Jubilee Hills</option>
            <option value="Madhapur">Madhapur</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <fieldset>
            <legend className="block text-gray-700 text-sm font-bold mb-2">
              4. How often do you buy clothes online?
            </legend>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="frequency"
                value="once a week"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Once a week</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="frequency"
                value="twice a month"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Twice a month</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="frequency"
                value="only when needed"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Only when needed</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="frequency"
                value="rarely"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Rarely</span>
            </label>
          </fieldset>
        </div>

        <div className="mb-4">
          <fieldset>
            <legend className="block text-gray-700 text-sm font-bold mb-2">
              5. What do you shop for the most?
            </legend>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="shopFor"
                value="T-shirts"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">T-shirts</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="shopFor"
                value="Shirts"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Shirts</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="shopFor"
                value="Dresses"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Dresses</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="shopFor"
                value="Ethnic Wear"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Ethnic Wear</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="shopFor"
                value="Bottoms"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Bottoms</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="shopFor"
                value="Accessories"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-[#f3423a] rounded focus:shadow-outline"
              />
              <span className="ml-2 text-gray-700">Accessories</span>
            </label>
          </fieldset>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryApp">
            6. Would you use a 30-minute fashion delivery app?
          </label>
          <select
            name="deliveryApp"
            id="deliveryApp"
            value={formData.deliveryApp}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favoriteStore">
            7. Any store or brand you would love to see on FlashFit? (optional)
          </label>
          <input
            type="text"
            name="favoriteStore"
            id="favoriteStore"
            value={formData.favoriteStore}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            8. Phone or Email for early access:
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-[#f3423a] hover:bg-[#e03d36] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;