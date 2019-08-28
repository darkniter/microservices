import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

// new
class App extends Component {
  // new

  constructor() {
    super();
    // new
    this.state = {
      users: []
    };
  };
  // new

  componentDidMount() {
    this.getUsers();
  };


  getUsers() {
  axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)  // new
  .then((res) => { this.setState({ users: res.data.data.users }); })
  .catch((err) => { console.log(err); });
  };


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">  {/* new */}
              <br/>
              <h1 className="title is-1">All Users</h1>
              <hr/><br/>
              <AddUser/>  {/* new */}
              <br/><br/>  {/* new */}
              <UsersList users={this.state.users}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);