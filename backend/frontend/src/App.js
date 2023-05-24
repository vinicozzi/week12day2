import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';

function App() {
  return (
   <>
   <Navigation/>
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
    </Switch>
    </>
  );
}

export default App;