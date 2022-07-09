import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Error from "../Error";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";


function UserProfileLogin({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/courses")
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));

    // console.log(email, password)

    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };

    //   const { data } = await axios.post(
    //     "http://localhost:5000/user/login",
    //     {
    //       email,
    //       password,
    //     },
    //     config
    //   );

    //   console.log(data);

    //   localStorage.setItem("userInfo", JSON.stringify(data));
    // } catch (error) {
    //   setError(error.response.data);
    //   console.log(error);
    // }


  };

  return (
    <div>
      {error && <Error>{error}</Error>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default UserProfileLogin;