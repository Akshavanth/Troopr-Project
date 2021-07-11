import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/actionuser';
import PropTypes from 'prop-types';


class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        address: '',
        contact: '',
        email: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          address: response.data.address,
          contact: response.data.contact,
          email: response.data.email 
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
        address: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
        contact: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
        email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const newUser = {
      username: this.state.username,
      address: this.state.address,
      contact: this.state.contact,
      email: this.state.email,
    };
  
    console.log(newUser);
    const id = this.props.match.params.id;
    console.log(id);

    this.props.updateUser(id,newUser);
    
    window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <h3>Edit User</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>User Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>
          <div className="form-group">
            <label>Contact: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
                />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary m-2" />
          </div>
        </form>
      </div>
    )
  }
}
EditUser.propTypes = {
  updateUser:PropTypes.func.isRequired
}

export default connect(null, {updateUser})(EditUser);

