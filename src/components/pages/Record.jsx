import React, { useEffect, useState } from "react";
import "./Record.css";
import { ResultTable } from "./ResultTable";
import axios from "axios";

export const Record = ({setResponse}) => {
  const [search, setSearch] = useState("");

  // get data from the server
  const getData = async () => {
    try {
      const res = await axios("http://127.0.0.1:5000/search",{
        pid: search
      });
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input
          className="searchbar"
          type="search"
          placeholder="Ptaient ID"
        />
        <button
          className="btn3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}>
          Search
        </button>
      </div> 
    </div>
  );
};
