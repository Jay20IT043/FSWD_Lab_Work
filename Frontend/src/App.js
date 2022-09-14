import "./App.css";
import Student from "./components/Student";
import StudentList from "./components/StudentList";
import Naviga from "./components/Naviga";
import Foot from "./components/Foot";
import Regis from "./components/Regis";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAlert from "./components/MyAlert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      <Router>
        <Naviga />
        <MyAlert alert={alert} />
        <Container>
          <Routes>
            <Route path="/patient" element={<Student showAlert={showAlert} />} />
            <Route
              path="patient/:studentId"
              element={<Student showAlert={showAlert} />}
            />
            <Route
              path="/students"
              element={<StudentList showAlert={showAlert} />}
            />
            <Route
              path="/register"
              element={<Regis showAlert={showAlert} />}
            />
          </Routes>
        </Container>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
