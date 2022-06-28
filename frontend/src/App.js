import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from './store/session'
import EventList from "./components/EventList";
import SingleEvent from "./components/SingleEvent";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        {isLoaded && (
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
        )}
        <Route exact path='/'>
          <EventList />
        </Route>
        <Route exact path='/events/:id'>
          <SingleEvent />
        </Route>
      </Switch>
    </>
  )
}

export default App;
