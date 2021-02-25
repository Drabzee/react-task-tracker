import { ADD_TASK, DELETE_TASK, TOGGLE_REMINDER } from "./types"

const initialState = [
  {id: 1, name: 'Doctor Appointment', datetime: '02-03-2021T4:30', reminder: true}
];

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK: 
      return [
        ...state,
        { id: Date.now(), ...action.payload }
      ];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case TOGGLE_REMINDER:
      return state.map((task) => task.id === action.payload ? {...task, reminder: !task.reminder} : task);

    default: return state;
  }
}

export default reducer;