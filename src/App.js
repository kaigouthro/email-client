import React, {Component} from 'react';
import Menu from './components/Menu';
import EmailViewer from './components/EmailViewer';
import EmailList from './components/EmailListView';
import EmailEditor from './components/EmailEditor';
import { Route } from 'react-router-dom';
import './static/css/email.css';

// const data = {
//     menuItems: [
//         {
//             name: "Inbox",
//             count: 3,
//             path: "/inbox"
//         }, {
//             name: "Sent",
//             count: 3,
//             path: "/sent"
//         }, {
//             name: "Trash",
//             count: 3,
//             path: "/trash"
//         }
//     ]
// }

class App extends Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <Menu />
                <EmailList />
                <Route path="/email/:emailId" component={EmailViewer} />
                <Route exact path="/" component={EmailViewer} />
                <Route path="/compose" component={EmailEditor} />
            </div>
        );
    }
}

export default App;
