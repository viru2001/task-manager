import React, { Fragment } from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword"
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Fragment>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/task-manager/" component={Dashboard} />
              <PrivateRoute exact path="/task-manager/update-profile" component={UpdateProfile} />
              <Route path="/task-manager/signup" component={Signup} />
              <Route path="/task-manager/signin" component={Signin} />
              <Route path="/task-manager/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Fragment>
    </>
  )
}

export default App;
