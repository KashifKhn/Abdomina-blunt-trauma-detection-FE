/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Upload.css";
import { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

export const Upload = ({ setResponse }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      navigate("/result");
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // const submit = async () => {
  //   setIsLoading(true);
  //   const fakePromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const fakeResponse = {
  //         predictions: [
  //           [
  //             0.7649041414260864, 0.22852472960948944, 0.7203370928764343,
  //             0.5890071392059326, 0.7507527470588684, 0.3222948908805847,
  //             0.19163395464420319, 0.6751775145530701, 0.5685198903083801,
  //             0.17052815854549408, 0.7105242013931274, 0.5096560120582581,
  //             0.42698943614959717, 0.7888472676277161,
  //           ],
  //         ],
  //       };
  //       resolve(fakeResponse);
  //       navigate("/result");
  //     }, 3000); // 2 seconds delay
  //   });
  //   try {
  //     const res = await fakePromise;
  //     setResponse(res);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  console.log(file);

  return (
    <div className="mainContainer">
      <div className="container">
        <Form.Group
          controlId="formFileLg"
          className="mb-3">
          <Form.Label>Upload file</Form.Label>
          <Form.Control
            type="file"
            size="lg"
            disabled={isLoading}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </Form.Group>
      </div>

      <div className="abc">
        <div className="def"></div>
        <div className="efg">
          <button
            onClick={submit}
            disabled={isLoading}
            className="btn2">
            {isLoading ? (
              <Spinner
                animation="border"
                role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Detect"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
