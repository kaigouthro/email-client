import React from 'react';
import EmailViewer from './components/EmailViewer';
import EmailEditor from './components/EmailEditor';
import EmailList from './components/EmailListView';
import { Route } from 'react-router-dom';

export const routes = [
  { path : '/email/:emailId', component : EmailViewer},
  { path : '/', component : EmailViewer, exact : true},
  { path : '/compose', component : EmailEditor},
  { path : '/list/:groupName', component : EmailList},
]

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)
