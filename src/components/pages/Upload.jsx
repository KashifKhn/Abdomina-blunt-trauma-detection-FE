/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Upload.css";
import { useState } from "react";
import axios from "axios";

export const Upload = ({ setResponse }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    const data = new FormData();
    data.append("file", file);

    try {
      setIsLoading(true);
      const res = await axios.post("http://127.0.0.1:5000/predict", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="flex justify-content-center align-items-center container1">
          <input
            type="file"
            id="file"
            disabled={isLoading}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="container2"></div>
      </div>

      <div className="abc">
        <div className="def"></div>
        <div className="efg">
          <button onClick={submit} disabled={isLoading} className="btn2">
            {isLoading ? "Loading..." : "Detect"}
          </button>
        </div>
      </div>
    </div>
  );
};
