import { ADD_TASK, DELETE_TASK, TOGGLE_REMINDER } from './types';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  };
}

export const toggleReminder = (id) => {
  return {
    type: TOGGLE_REMINDER,
    payload: id
  };
}