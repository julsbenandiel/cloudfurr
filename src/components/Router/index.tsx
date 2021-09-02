
import AnimalRecords from 'components/Main/Content/AnimalRecords';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cloudfurr from "components/Main/Content/Cloudfurr";
import User from "components/Main/Content/User";
import { Settings } from 'components/Main/Content/Settings';



interface AppRouterInterface {
}

export const AppRouter:FC<AppRouterInterface> = (props) => {

  return (
    <Switch>
      <Route path="/records">
        <AnimalRecords/>
      </Route>
      <Route path="/users">
        <User/>
      </Route>
      <Route path="/shop">
        <Cloudfurr/>
      </Route>
      <Route path="/settings">
        <Settings/>
      </Route>
      <Route path="/">
        <h1>Home Page</h1>
      </Route>
    </Switch>
  )
}
