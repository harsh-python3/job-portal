import React, { useState } from "react";

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.password) tempErrors.password = "Password is required.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted successfully", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {submitted ? (
          <div className="text-green-500 text-center">Login successfull!</div>
        ) : (
          <form onSubmit={handleSubmit} className="ml-20">
            <div className="mb-4 ">
              <label className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogInForm;
