import "./Upload.css";
import { useState } from "react";
import axios from "axios";

export const Upload = () => {
  const [file, setFile] = useState(null);

  const submit = () => {
    const data = new FormData();
    data.append('file', file);

    axios
      .post("http://127.0.0.1:5000/predict", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="flex justify-content-center align-items-center container1">
          <input
            type="file"
            id="file"
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
          <button onClick={submit} className="btn2">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
