import {SELECT_GROUP} from '../../actions/types';
import {selectGroup} from '../../actions';

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
})
