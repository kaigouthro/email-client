import React from 'react';
import {shallow} from 'enzyme';
import EmailEditor, {EmailHeader} from '../EmailEditor';

describe("EmailEditor", () => {
    let emailEditor = null;
    beforeEach(() => {
        emailEditor = shallow(<EmailEditor/>);
    })
    it("should have email-content class", () => {
        expect(emailEditor.find('.email-content').exists()).toBeTruthy();
    });
    it("should have email header and relevant content", () => {
        expect(emailEditor.find(EmailHeader).exists()).toBeTruthy();
    });
    it("should have email body to edit text", () => {
        expect(emailEditor.find('.email-content-body').exists()).toBeTruthy();
    })

});

describe("EmailHeader", () => {
    let emailEditor = null;
    beforeEach(() => {
        const sampleProps = {
            title: 'Hello from Toronto',
            name: 'Tilo Mitra'
        }
        emailEditor = shallow( <EmailHeader {...sampleProps} />);
    });

    it("should have email header and relevant content",() => {
        expect(emailEditor.find('.email-content-header').exists()).toBeTruthy();
        expect(emailEditor.find('.email-content-title').exists()).toBeTruthy();
        expect(emailEditor.find('.email-content-controls').exists()).toBeTruthy();
    });
    it("should have reply button", () => {
        expect(emailEditor.find('.pure-button').text()).toContain('Reply');
    });
    it("should have relevant content based on props",() => {
      expect(emailEditor.find('.email-content-title').text()).toContain('Hello from Toronto');
      expect(emailEditor.find('.email-content-subtitle').text()).toContain('Tilo Mitra');
    })
})
