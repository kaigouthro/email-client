import React, {Component} from 'react';
import EmailListView from './components/EmailListView';
import EmailViewer from './components/EmailViewer';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import './static/css/email.css';


class App extends Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <Menu />
                <Route path="/" component={EmailListView} exact={true}/>
                <Route path="/" component={EmailViewer} exact />
                <Route path="/list/:groupName" component={EmailListView} />
                <Route path="/list/:groupName" component={EmailViewer} exact/>
                <Route path="/email/:emailId" component={EmailViewer} />
                <Route path="/list/:groupName/email/:emailId" component={EmailViewer} />
                <Route path="/list/:groupName/email/:emailId" component={EmailViewer} />
            </div>
        );
    }
}

export default App;
