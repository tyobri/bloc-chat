import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="Room-List">Welcome to Bloc Chat!</h1>

        </header>

        <RoomList firebase={firebase} activeRoom={this.activeRoom} setRoom={this.setRoom} />
        <MessageList activeRoom={this.activeRoom} firebase={firebase} />

      </div>
    );
  }
}

export default App;
