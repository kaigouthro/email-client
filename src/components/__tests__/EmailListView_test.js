import React from 'react';
import {shallow} from 'enzyme';
import {EmailList, getEmails} from '../EmailListView';
import {fromJS, is} from 'immutable';
import {MetaEmail} from '../MetaEmail';

describe("EmailListView", () => {
    let emailList = null;
    beforeEach(() => {
        const sampleProps = {
            selected: false,
            unread: false,
            name: 'Test',
            desc: 'Hello Test',
            subject: 'TestSubject',
            avatar: './src/img/test.jpg'
        };
        emailList = shallow(<EmailList emailList={fromJS([sampleProps])}/>);
    });
    it("should have MetaEmail component", () => {
        expect(emailList.find(MetaEmail).exists()).toBeTruthy();
    });
    it("should have correct number of MetaEmail components", () => {
        expect(emailList.find(MetaEmail).length).toEqual(1);
    });
    it("should have div with id list element", () => {
        expect(emailList.find('#list').exists()).toBeTruthy();
    });

    it("should not have a MetaEmail component if list is empty", () => {
        const email = shallow(<EmailList emailList={fromJS([])}/>);
        expect(email.find(MetaEmail).exists()).toBeFalsy();
    });
    it("should have getEmails method and should work as expected", () => {
        const testData = fromJS({
            test1: [
                {
                    name: 'test',
                    group: 'test1'
                }
            ],
            test2: [
                {
                    name: 'test1',
                    group: 'test2'
                }
            ]
        });
        const result = fromJS([
            {
                name: 'test',
                'group': 'test1'
            }
        ]);
        const actualResult = getEmails(testData, 'test1');
        expect(is(result, actualResult)).toBeTruthy();

    })
})
