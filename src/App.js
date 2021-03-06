import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";
 
function App() {
 return (
   <Router>
     <div className="container">
     <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/create" component={CreateUser} />
     </div>
   </Router>
 );
}
 
export default App;