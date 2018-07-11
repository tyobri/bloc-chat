import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'
import User from './components/User';

var config = {
  apiKey: "AIzaSyBF_RAfpht8lUBEFHBz5mCHQFcwQAnkO8s",
  authDomain: "bloc-chat-c415f.firebaseapp.com",
  databaseURL: "https://bloc-chat-c415f.firebaseio.com",
  projectId: "bloc-chat-c415f",
  storageBucket: "",
  messagingSenderId: "819063000346"
};
firebase.initializeApp(config);



class App extends Component {
constructor(props) {
  super(props) // anytime you work with a class that is inheriting from another class inside instructor method you have to call super()
  this.state ={
  message: [],
  roomId: [],
  activeRoom: '',
  user: ''
  }

 
  this.setRoom = this.setRoom.bind(this); // hard binding, I don't care where this is called. I want the value of 'this' to be 'this'
  this.setUser = this.setUser.bind(this);
}

  setRoom(room){
    this.setState({activeRoom: room});
    console.log(this.state.activeRoom.key)
  }

    setUser(user){
    console.log("setUser was called.");
    this.setState({ user : user})
    if (user) {
       console.log("set user to " + user.displayName);
     } else {
       console.log("null user was provided.");
     }
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Room-List">Welcome to Bloc Chat!</h1>
        </header>

        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setRoom={this.setRoom} />
        <MessageList activeRoom={this.state.activeRoom} firebase={firebase} />
        <User firebase={firebase} activeRoom={this.state.activeRoom} setUser={this.setUser} user={this.state.user} />
      </div>
    );
  }
}

export default App;
