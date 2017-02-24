import {shallow, render} from 'enzyme';
import React from 'react';
import Menu, {MenuItem} from '../Menu';
import {Link} from 'react-router-dom';

describe("Menu", () => {
    let menu = null;
    beforeEach(() => {
        menu = shallow(<Menu menuItems={[]}/>);
    });

    it('should have a menu', () => {
        expect(menu.find('.pure-menu').length).toEqual(1);
    });
    it('should have menu list', () => {
        expect(menu.find('.pure-menu-list').length).toEqual(1);
    });
    it('should have menu items', () => {
        expect(menu.find('.pure-menu-item').length).toEqual(0);
    });
    it('should have compose button', () => {
        expect(menu.find('.pure-button').length).toBe(1);
        expect(menu.find('.pure-button').text()).toEqual("Compose");
    });

    it('should have the menu items according to props', () => {
        const sampleProps = [
            {
                name: "hello",
                count: 2,
                path: "/"
            },
            {
                name: "hello",
                count: 2,
                path: "/"
            }
        ];
        const menuItems = shallow(<Menu menuItems={sampleProps}/>);
        expect(menuItems.find(MenuItem).length).toEqual(2);
    });

});

describe("MenuItem", () => {
    let menuItem = null;
    beforeEach(() => {
        menuItem = shallow(<MenuItem name="Inbox" count={3} path="/inbox"/>);
    })
    it('should have Link component', () => {
        expect(menuItem.find(Link).length).toEqual(1);
    });
    it('should show the email count when count is provided', () => {
        expect(menuItem.find('.email-count').text()).toContain(3);
    });
    it('should not show email count when count is not provided', () => {
        const menu = shallow(
            <MenuItem name="Inbox" path="/inbox"></MenuItem>
        );
        expect(menu.find('.email-count').length).toEqual(0);
    })
})
