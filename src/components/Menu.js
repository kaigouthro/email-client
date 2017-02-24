import React, {Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.renderMenuItems = this.renderMenuItems.bind(this);
    }
    renderMenuItems(){
        const { menuItems } = this.props;
        return menuItems.map( (item,index) => (
          <MenuItem {...item} key={index} />
        ));
    }
    render() {
        return (
            <div id="nav" className="pure-u">
                <div className="nav-inner">
                    <button className="primary-button pure-button">Compose</button>
                    <div className="pure-menu">
                        <ul className="pure-menu-list">
                          {this.renderMenuItems()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export const MenuItem = (props) => (
  <li className="pure-menu-item">
      <Link to={props.path} className="pure-menu-link">
          {props.name} {props.count ? <span className="email-count"> ({props.count}) </span> : null}
      </Link>
  </li>
)

MenuItem.propTypes = {
        name : PropTypes.string,
        path : PropTypes.string
}

export default Menu;
