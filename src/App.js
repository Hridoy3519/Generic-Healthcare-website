import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Signup from "./Components/Sigup/Signup";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/signup">
                <Signup></Signup>
              </Route>
            </Container>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
