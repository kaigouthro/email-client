import {SELECT_GROUP, SELECT_EMAIL} from './types';

export const selectGroup = (groupName) => ({type: SELECT_GROUP, payload: groupName});
export const selectEmail = (index) => ({type : SELECT_EMAIL,payload : index})
