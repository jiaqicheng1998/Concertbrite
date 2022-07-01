import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from './store/session'
import EventList from "./components/EventList";
import SingleEvent from "./components/SingleEvent";
import Footer from "./components/Footer";
import NewEvent from "./components/NewEvent";
import EditEvent from "./components/EditEvent";
import Order from "./components/Order";
import NewOrder from "./components/NewOrder";
import EditOrder from "./components/EditOrder";
import WrongPlace from "./components/WrongPlace";


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
        <Route exact path='/events/new'>
          <NewEvent isLoaded={isLoaded}/>
        </Route>
        <Route path='/events/:eventId/orders/:ticketId/edit'>
          <EditOrder isLoaded={isLoaded}/>
        </Route>
        <Route exact path='/events/:id/register'>
          <NewOrder isLoaded={isLoaded}/>
        </Route>
        <Route exact path='/events/:id/edit'>
          <EditEvent isLoaded={isLoaded}/>
        </Route>
        <Route exact path='/events/:id'>
          <SingleEvent />
        </Route>
        <Route exact path='/:userId/orders'>
          <Order isLoaded={isLoaded}/>
        </Route>
        <WrongPlace />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
