import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Student(props) {
  const [state, setState] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
  });

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const { studentId } = useParams(); // Get the Path Parameter from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (studentId) {
      axios
        .get(`http://localhost:8080/patient/${studentId}`)
        .then((response) => {
          if (response.data != null) {
            setState({
              name: response.data.name,
              age: response.data.age,
              
              address: response.data.address,
              id: response.data.id,
            });
          }
        })
        .catch((error) => props.showAlert("danger", "Error"));
    }
  }, []);

  const textChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  let student = {
    id: state.id,
    name: state.name,
    age: state.age,
    
    address: state.address,
  };

  const saveStudent = (event) => {
    event.preventDefault();
    // console.log(student);

    axios
      .post("http://localhost:8080/patient", student)
      .then((response) => {
        // console.log(response.data);
        if (response.data != null) {
          // props.showAlert("success", "Record added successfully");
          notify("record added successfully", false);
          setState({ id: "", name: "",age: "",  address: "" });
        }
      })
      .catch((error) => props.showAlert("danger", "Error"));
  };

  const updateStudent = (event) => {
    event.preventDefault();
    console.log(studentId);
    axios
      .put(`http://localhost:8080/patient/${studentId}`, student)
      .then((response) => {
        if (response.data != null) {
          props.showAlert("success", "Record updated successfully");
          notify("record updated successfully", false);
          navigate("/patients"); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-3">
      <Container>
        <Card>
          <Form onSubmit={studentId != null ? updateStudent : saveStudent}>
            <Card.Header>
              <strong>
                {studentId != null
                  ? "Update Student Information"
                  : "Add Student Information"}
              </strong>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  name="id"
                  value={state.id}
                  type="text"
                  placeholder="Enter id"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={state.name}
                  type="text"
                  placeholder="Enter name"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  name="age"
                  value={state.age}
                  type="text"
                  placeholder="Enter age"
                  onChange={textChanged}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={state.address}
                  type="text"
                  placeholder="Enter Address"
                  onChange={textChanged}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit" onClick={notify}>
                {studentId != null ? "Update" : "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
      
    </div>
  );
}
