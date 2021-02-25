import tasksReducer from './tasks/reducer';
import formVisibilityReducer from './formVisibility/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  tasks: tasksReducer,
  formVisibility: formVisibilityReducer
});