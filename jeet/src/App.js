import logo from "./logo.svg";
import "./App.css";
import { Navigation_bar } from "./components/Navigation_bar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ScarchResult } from "./pages/ScarchResult";
import { Route, Switch } from "react-router-dom"
import { FindDr_test } from "./pages/FindDr_test";
import { Test_profile } from "./pages/Test_profile";
import { Login } from "./pages/Login";
import { PatientDetails } from "./pages/PatientDetails";
import { DrInfo } from "./prem/DrReviewPage/components/DrInfo";
import  DrConsultPage from "./prem/components/DrConsultPage";

function App() {
  return (
    <>
      {/* <Home /> */}
     
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/Find Dr">
        <DrConsultPage/>
        </Route>
        <Route path="/Scarch">
        <ScarchResult/>
        </Route>
        <Route path="/Profile">
        <DrInfo/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/PatientDetails">
          <PatientDetails/>
        </Route>
      </Switch>
      {/* <DrConsultPage/> */}
      {/* <DrInfo/> */}
    </>
  );
}

export default App;
