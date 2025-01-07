import './Register.css';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nic: '',
    fullName: '',
    sex: '',
    job: '',
    streetNumber: '',
    street: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    // Validate phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }

    // Validate password
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters, include uppercase, lowercase letters, and a number';
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <>
    <div className='RegisterMain'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>NIC:</label>
        <input type="text" name="nic" value={formData.nic} onChange={handleChange} />
      </div>

      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </div>

      <div>
        <label>Sex:</label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>Job:</label>
        <input type="text" name="job" value={formData.job} onChange={handleChange} />
      </div>

      <div>
        <label>Street Number:</label>
        <input type="text" name="streetNumber" value={formData.streetNumber} onChange={handleChange} />
      </div>

      <div>
        <label>Street:</label>
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
      </div>

      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>

      <div>
        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
      </div>

      <button className='submit-button' type="submit">Register</button>
    </form>
    </div>
    </>
  );
};

export default RegisterForm;
