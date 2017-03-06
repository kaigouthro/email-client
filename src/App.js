import React, {Component} from 'react';
import { routes , RouteWithSubRoutes } from './routes';
import Menu from './components/Menu';
import './static/css/email.css';


class App extends Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <Menu />
                {routes.map( (route,index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))}
            </div>
        );
    }
}

export default App;
