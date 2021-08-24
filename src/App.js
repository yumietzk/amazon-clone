import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import './App.css';

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          payload: null,
        });
      }
    });

    return () => {
      // Any cleanup operations
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
