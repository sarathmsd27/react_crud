import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddData = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/endpoint/add-employee",
        values
      );
      if(response){
        setValues({
          name: "",
          email: "",
          age: "",
        });
      }
      console.log("Form Values:", values); 
      console.log("Response:", response.data); 
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Add Employee</h2>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success">
            Home
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter the email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="Enter the age"
              name="age"
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
