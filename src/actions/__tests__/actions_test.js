import {SELECT_GROUP} from '../types';
import {selectGroup} from '../index';

describe("selectGroup action", () => {
    it("should have correct type", () => {
        expect(selectGroup('inbox').type).toEqual(SELECT_GROUP);
    });
    it("should have correct payload", () => {
        expect(selectGroup('sent').payload).toEqual('sent');
    });
})
