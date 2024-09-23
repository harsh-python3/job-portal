import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    if (!formData.username) tempErrors.username = "Username is required.";
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
   <div><h1 className="flex justify-center text-3xl font-mono">Sign Up</h1>
   
    <div className="flex align-middle justify-center">
      
      {submitted ? (
        <div >Registration Succesfull !! </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default SignUpForm;
