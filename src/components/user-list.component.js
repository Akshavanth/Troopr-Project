import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {deleteUser} from '../redux/actions/actionuser';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.address}</td>
    <td>{props.user.contact}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>edit</Link> |
      
       <button onClick={() => { props.handleDelete(props.user._id) }}>delete</button>
    </td>
  </tr>
)


 
class UserList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
    this.addUser = this.addUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDelete(id) {
    this.props.deleteUser(id)

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
    
  }
  addUser(){
    this.props.history.push('/create');
  }
  userListss() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} handleDelete={this.handleDelete} key={currentuser._id}/>;
    })
  }


  render() {
    return (
        <div>
             <h2 className="text-center">Users List</h2>
        <div >
                <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
        </div>
             
             <br></br>
                    <table className="table">

                        <thead className="thead-light">
                            <tr>
                                <th> User Name</th>
                                <th> ADDRESS</th>
                                <th> CONTACT</th>
                                <th> Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        { this.userListss() }
                    </table>
         </div>
    )
 }
}

UserList.propTypes = {
  deleteUser:PropTypes.func.isRequired
}

export default connect(null, {deleteUser})(UserList) ;

