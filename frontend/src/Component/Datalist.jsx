import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/endpoint`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/endpoint/del-employee/${id}`)
      .then((res) => {
        setData(data.filter((employee) => employee._id !== id));
        console.log("Employee deleted successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2>Employee List</h2>
          <div className="d-flex justify-content-end">
            <Link to="/adddata" className="btn btn-success">
              Create
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => {
                return (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>
                      <Link
                        to={`/update/${employee._id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(employee._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataList;
