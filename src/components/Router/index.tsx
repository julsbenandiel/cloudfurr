import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface AppRouterInterface {
}

export const AppRouter:FC<AppRouterInterface> = (props) => {

  return (
    <Switch>
      <Route path="/records">
        <p>records</p>
      </Route>
      <Route path="/shop">
        <p>store</p>
      </Route>
      <Route path="/users">
        <p>users</p>
      </Route>
      <Route path="/">
        <p>dashboard</p>
      </Route>
    </Switch>
  )
}
