import {
  FETCH_USER_SUCCESS,
  ADD_USER,
  EDIT_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actions/actionType';

const initialState = {
  persons: [],
  error: null
}
export default function userlists(state = initialState, action) {
   switch (action.type) { 
     case FETCH_USER_SUCCESS:
        return {
          ...state,
          persons: action.person.data
        };

      case ADD_USER:
         return {
           ...state,
            persons: [...state.persons, action.person.data]
         };

       case EDIT_USER:
          return {
            ...state,
             person: action.person.data
          };
      case UPDATE_USER:
         return {
           ...state,
            persons:  action.user
         };

     case DELETE_USER:
        return {
          ...state,
          persons: state.persons.filter(person => person._id !== action.id)
        };

      default:
       return state;
   }
}
