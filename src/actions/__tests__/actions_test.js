import {SELECT_GROUP,SELECT_EMAIL} from '../types';
import {selectGroup,selectEmail} from '../index';

describe("selectGroup action", () => {
    it("should have correct type", () => {
        expect(selectGroup('inbox').type).toEqual(SELECT_GROUP);
    });
    it("should have correct payload", () => {
        expect(selectGroup('sent').payload).toEqual('sent');
    });
});

describe("selectEmail action",() => {
    it("should have correct type", () => {
        expect(selectEmail(1).type).toEqual(SELECT_EMAIL);
    });
    it("should have correct payload", () => {
        expect(selectEmail(2).payload).toEqual(2);
    });
});
