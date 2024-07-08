import React, { useEffect, useState } from "react";
import "./Record.css";
import { ResultTable } from "./ResultTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Record = ({ setResponse }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/login");
    }
  }, [])

  const navigate = useNavigate();

  // get data from the server
  const getData = async () => {
    const data = new FormData();
    data.append("pid", search);

    try {
      const url = "http://localhost:5000/search";
      const data = {
        pid: search,
      };

      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      setResponse(res.data);
      navigate("/result");
    } catch (err) {
      if (err.response.status === 404) {
        alert("No Record Found");
        setResponse([]);
        navigate("/upload");
      }
      console.log(err.response.data);
    }
  };

  return (
    <div className="container record w-100 mt-5">
      <div className="record ">
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Patient Id"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </Form.Group>
        <button className="btn-primary" onClick={() => getData()}>
          Search
        </button>
      </div>
    </div>
  );
};
