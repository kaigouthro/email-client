import {selectGroup, selectEmail} from '../../actions';

import email from '../email';

import {fromJS} from 'immutable';

describe("email reducer", () => {
    it("should have correct default value", () => {
        expect(email().has('currentSelect')).toBeTruthy();
        expect(email().has('emailList')).toBeTruthy();
    });
    it("should have state as passed", () => {
        const state = fromJS({currentSelect: 'test', emailList: []})
        expect(email(state, undefined).get('currentSelect')).toEqual('test');
        expect(email(state, undefined).get('emailList').isEmpty()).toBeTruthy();

    })
    it("should select group according to action", () => {
        expect(email(undefined, selectGroup('sent')).get('currentSelect')).toEqual('sent');
    });
    it("should select email by setting the required props", () => {
        const first = email(undefined, selectGroup('inbox'));
        const result = email(first, selectEmail(1));
        expect(result.getIn(['emailList', 'inbox', '1', 'selected'])).toBeTruthy();
        expect(result.getIn(['emailList', 'inbox', '1', 'unread'])).toBeFalsy();
    });
    it("should select one item at a time", () => {
        const first = email(undefined, selectGroup('inbox'));
        const second = email(first, selectEmail(0));
        const result = email(second, selectEmail(1));
        expect(result.getIn(['emailList', 'inbox', '0', 'selected'])).toBeFalsy();
        expect(result.getIn(['emailList', 'inbox', '1', 'selected'])).toBeTruthy();
    });
})
