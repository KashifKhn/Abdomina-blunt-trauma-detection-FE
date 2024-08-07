import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginForm = ({setAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response,setResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if(auth){
      navigate("/record");
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email',email)
    data.append('password',password)
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password
      }, {
        headers: {
          "Content-Type": "Application/json",
        }
      });
      setResponse(res);
      localStorage.setItem("auth", true);
      setAuth(true);
      navigate("/record");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="border bg-white p-5 rounded shadow w-full">
            <h2 className="text-center mb-4">Login</h2>
            <Form.Group
              controlId="formBasicEmail"
              className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
