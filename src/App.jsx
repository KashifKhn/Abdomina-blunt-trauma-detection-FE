import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Upload } from "./components/pages/Upload";
import { Result } from "./components/pages/Result";
import { Record } from "./components/pages/Record";
import { Home } from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import LoginForm from "./components/pages/Login";

function App() {
  const [response, setResponse] = useState([]);
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [auth]);


  return (
    <div className="App">
      <Navbar auth={auth} />
      <Routes>
        <Route
          path="/upload"
          element={<Upload setResponse={setResponse} response={response} />}
        />
        <Route path="/result" element={<Result response={response} />} />
        <Route path="/record" element={<Record setResponse={setResponse} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
