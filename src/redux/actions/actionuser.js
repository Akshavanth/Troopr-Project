import axios from 'axios';
import {
  FETCH_USER_SUCCESS,
 
  ADD_USER,
  EDIT_USER,
  UPDATE_USER,
  DELETE_USER,
} from './actionType';

export function fetchUser() {
  return dispatch =>{
      axios.get('http://localhost:5000/users/')
      .then( (response)=> {
        console.log(response.data);
        dispatch({
          type:FETCH_USER_SUCCESS,
          person:response.data
        })

      })
      .catch((error)=> {
        console.log(error);
      });

  }
}

export function addUser(data) {
  return dispatch => {
   axios.post('http://localhost:5000/users/add', data)
    .then(response =>{
      dispatch({
        type: ADD_USER,
        person:response.data
      })
    })

  }
}

export function editUser(ids) {
  return dispatch => {
   axios.get(`http://localhost:5000/users/update/${ids}`)
    .then(response =>{
      dispatch({
        type: EDIT_USER,
        person:response.data
      })
    })

  }
}

export function updateUser(_id, data) {
  console.log(_id);
  console.log(data);
  return dispatch => {
   axios.post('http://localhost:5000/users/update/'+_id, data)
    .then(response =>{
      dispatch({
        type: UPDATE_USER,
        user:response.data
      })
    })

  }
}

export function deleteUser(_id) {
  console.log(_id);
  return dispatch => {
   axios.delete(`http://localhost:5000/users/${_id}`)
    .then(response =>{
      dispatch({
        
        type: DELETE_USER,
        id:_id,
        
      })
      console.log("yeah");
    })
  }
}
