import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Upload } from "./components/pages/Upload";
import { Result } from "./components/pages/Result";
import { Record } from "./components/pages/Record";
import { Home } from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState({
    predictions: [
      [
        0.7649041414260864, 0.22852472960948944, 0.7203370928764343,
        0.5890071392059326, 0.7507527470588684, 0.3222948908805847,
        0.19163395464420319, 0.6751775145530701, 0.5685198903083801,
        0.17052815854549408, 0.7105242013931274, 0.5096560120582581,
        0.42698943614959717, 0.7888472676277161,
      ],
    ],
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/upload"
          element={<Upload setResponse={setResponse} response={response} />}
        />
        <Route path="/result" element={<Result response={response} />} />
        <Route path="/record" element={<Record />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
