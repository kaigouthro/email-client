import React, {Component} from 'react';
import Menu from './components/Menu';
import EmailEditor from './components/EmailEditor';
import EmailList from './components/EmailListView';
import './static/css/email.css';

const data = {
    menuItems: [
        {
            name: "Inbox",
            count: 3,
            path: "/inbox"
        }, {
            name: "Sent",
            count: 3,
            path: "/sent"
        }, {
            name: "Trash",
            count: 3,
            path: "/trash"
        }
    ]
}

class App extends Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <Menu />
                <EmailList />
                <EmailEditor/>
            </div>
        );
    }
}

export default App;
