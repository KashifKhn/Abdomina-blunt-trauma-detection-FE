import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Upload } from "./components/pages/Upload";
import { Result } from "./components/pages/Result";
import { Record } from "./components/pages/Record";
import { Home } from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import LoginForm from "./components/pages/Login";

function App() {
  const [response, setResponse] = useState([]);

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
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
