import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.renderMenuItems = this.renderMenuItems.bind(this);
    }
    renderMenuItems() {
        const {menuItems,selectGroup} = this.props;
        return menuItems.map((count, name) => (<MenuItem name={name} count={count} key={name} handleClick={() => selectGroup(name.toLowerCase())}/>)).valueSeq();
    }
    render() {
        return (
            <div id="nav" className="pure-u">
                <div className="nav-inner">
                    <Link to="/compose" className="primary-button pure-button">Compose</Link>
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
        <a href="#" className="pure-menu-link" onClick={props.handleClick}>
            {props.name}   {props.count
                ? <span className="email-count">
                        ({props.count})
                    </span>
                : null}
        </a>
    </li>
)

MenuItem.propTypes = {
    name: PropTypes.string
}
export const capString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const getMenuItems = (emailList) => {
    return emailList.map(value => value.size).mapKeys(capString);
}

const mapStateToProps = (state) => ({
    menuItems: getMenuItems(state.email.get('emailList'))
});


export default connect(mapStateToProps,actions)(Menu);
