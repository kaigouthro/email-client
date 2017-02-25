import {SELECT_GROUP, COMPOSE_EMAIL} from './types';

export const selectGroup = (groupName) => ({type: SELECT_GROUP, payload: groupName});

export const composeEmail = (payload) => ({type:COMPOSE_EMAIL,payload})
