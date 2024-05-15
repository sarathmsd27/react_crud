import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [employee, setEmployee] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/endpoint/employee/${id}`)
      .then((res) => {
        
        setEmployee(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8081/endpoint/update-employee/${id}`, formData)
      .then((res) => {
        if(res){
            setFormData({
              name: "",
              email: "",
              age: "",
            });
        }
        console.log(res.data);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Update Employee</h2>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success">
            Home
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              required
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              className="form-control"
              required
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <br/>
          <button className="btn btn-success" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
