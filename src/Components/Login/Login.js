import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoading, userLogIn, signInWithGoogle } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    }).finally(() => setIsLoading(false));
  };

  const handleUserLogin = () => {
    userLogIn(email,password)
      .then((userCredential) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="w-100 login-page" style={{ maxWidth: "480px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleUserLogin();
              }}
              className="w-100"
              variant="primary"
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <div className="text-center mt-2">
            Need an Account? <Link to="/signup">Sign Up</Link>
          </div>
          <div className="text-center mt-2">
            <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

// {error && <Alert variant="danger"> {error}</Alert>}

// .then((result) => {
//   setUser(result.user);
//   setError("");
// })
// .catch((error) => {});
