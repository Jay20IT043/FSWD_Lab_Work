import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Student(props) {
    const [state, setState] = useState({
        uname: "",
        email: "",
        pass: "",
        cpass: "",
      });
      const textChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setState({
          ...state,
          [name]: value,
        });
      };
    

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
       
      });
    }
  };

  

  

  return (
    <div className="my-3">
      <Container>
        <Card>
          <Form >
            <Card.Header>
              {/* <strong>
                {studentId != null
                  ? "Update Student Information"
                  : "Add Student Information"}
              </strong> */}
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="uname"
                  value={state.uname}
                  type="text"
                  placeholder="Enter uname"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={state.email}
                  type="email"
                  placeholder="Enter email"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="pass"
                  value={state.pass}
                  type="password"
                  placeholder="Enter password"
                  onChange={textChanged}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="cpass"
                  value={state.cpass}
                  type="password"
                  placeholder="Enter Password"
                  onChange={textChanged}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit" onClick={notify}>
                
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
