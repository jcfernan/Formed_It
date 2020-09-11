import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Patients from '../components/Patients';
import Patient from '../components/Patient'
import NewPatient from '../components/NewPatient'

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/patients" exact component={Patients}/>
            <Route path="/patient/:id" exact component={Patient}/>
            <Route path="/patient" exact component={NewPatient}/>
        </Switch>
    </Router>
);