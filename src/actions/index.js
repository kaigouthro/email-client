import {SET_FORM,SELECT_GROUP, SELECT_EMAIL,SEND_EMAIL} from './types';

export const selectGroup = (groupName) => ({type: SELECT_GROUP, payload: groupName});
export const selectEmail = (groupName = 'inbox',index) => ({type : SELECT_EMAIL,payload : index, groupName});
export const setForm = (name,value) => ({type: SET_FORM, name,value});
export const sendEmail = (emailSubject,emailBody) => ({type: SEND_EMAIL,emailSubject,emailBody});
