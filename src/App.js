import React, { Component } from 'react';
import Menu from './components/Menu';
import './static/css/email.css';

const data = {
  menuItems : [
    {name: "Inbox",count:3,path:"/inbox"},
    {name: "Sent",count:3,path:"/sent"},
    {name: "Trash",count:3,path:"/trash"},
  ]
}

class App extends Component {
  render() {
    return (
      <div id="layout" className="content pure-g">
        <Menu menuItems={data.menuItems} />
        <div id="list" class="pure-u-1">
        </div>
      </div>
    );
  }
}

export default App;
