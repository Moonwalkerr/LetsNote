import React from 'react';
import SignUpForm from './comps/signUpForm';
import {AuthProvider} from './context/authCont';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./comps/home";
import LoginForm from './comps/login';
import ForgotPaswd from "./comps/forgotPaswd";
import PrvRoute from "./comps/privateRoute";

function App() {
  return (
    <div >
     <Router>
      <AuthProvider>
        <Switch>
          <PrvRoute exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/signup">
          <SignUpForm/>
          </Route>
          <Route exact path="/forgotpassword"
          component={ForgotPaswd}/>
        </Switch>
      </AuthProvider>
     </Router>
      </div>
  );
}

export default App;