import {shallow} from 'enzyme';
import React from 'react';
import {Link} from 'react-router-dom';
import {MenuItem,Menu,capString,getMenuItems} from '../Menu';
import {fromJS,is,Map} from 'immutable';

describe("Menu", () => {
    let menu = null;
    beforeEach(() => {
        menu = shallow(<Menu menuItems={fromJS([])}/>);
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
    it('should have Link to compose button', () => {
        expect(menu.find(Link).exists()).toBeTruthy();
    });

    it('should have the menu items according to props', () => {
        const sampleProps = {
          "inbox" : 0,
          "sent" :  3
        };
        const menuItems = shallow(<Menu menuItems={fromJS(sampleProps)}/>);
        expect(menuItems.find(MenuItem).length).toEqual(2);
    });
    it("should have the capString method and should work as expected",()=>{
        expect(capString('hello')).toEqual('Hello');
        expect(capString('why')).toEqual('Why');
    });
    it("should have a method called getMenuItems to derive data from store",() => {
          const testData = fromJS({
                test1 :[{name : 'test',group:'test1'}],
                test2 :[{name : 'test1',group:'test2'}],
          });
          const result = Map({
                Test1 : 1,
                Test2 : 1
          });
          const actualResult = getMenuItems(testData);
          expect(is(result,actualResult)).toBeTruthy();
    });

});

describe("MenuItem", () => {
    let menuItem = null;
    beforeEach(() => {
        menuItem = shallow(<MenuItem name="Inbox" count={3} path="/inbox"/>);
    })
    it('should have anchor component', () => {
        expect(menuItem.find('a').exists()).toBeTruthy();
    });
    it('should show the email count when count is provided', () => {
        expect(menuItem.find('.email-count').text()).toContain(3);
    });
    it('should not show email count when count is not provided', () => {
        const menu = shallow(
            <MenuItem name="Inbox" ></MenuItem>
        );
        expect(menu.find('.email-count').exists()).toBeFalsy();
    })
})
