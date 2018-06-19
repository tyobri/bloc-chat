import React, { Component } from 'react';


class RoomList extends Component {
	constructor(props) {
		super(props);

		this.roomsRef = this.props.firebase.database().ref('rooms');

		this.state = {
		rooms: [],
		newRoomsName: ''
	};

}

	componentDidMount() {
     	this.roomsRef.on('child_added', snapshot => {
     		const room = snapshot.val();
     		room.key = snapshot.key;
     	this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }

render(){

	return(
		 <section id="room-list">
           {this.state.rooms.map ((room, index) =>
             <li key={index} onClick={() => this.props.setRoom(room)}>{room.name}</li> 
             )
           }
         </section>
	);
}


}

export default RoomList;