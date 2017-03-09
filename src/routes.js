import React from 'react';
import EmailViewer from './components/EmailViewer';
import EmailEditor from './components/EmailEditor';
import EmailList from './components/EmailListView';
import {Route} from 'react-router-dom';

export const routes = [
    {
        path: '/list/:groupName/email/:emailId',
        component: EmailViewer
    }, {
        path: '/',
        component: EmailViewer,
        exact: true
    }, {
        path: '/',
        component: EmailList,
        exact: true
    }, {
        path: '/compose',
        component: EmailEditor
    }, {
        path: '/list/:groupName',
        component: EmailList
    }
];
export const RouteWithSubRoutes = (route) => {
    console.log(route);
    return (
        <Route exact={route.exact} path={route.path} render={props => (<route.component {...props} routes={route.routes} /> )}/>
    )
}
