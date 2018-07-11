import React, { Component } from 'react';


class RoomList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rooms: [],
			newRoomsName: '',
      value: ''
	};
    this.handleChange = this.handleChange.bind(this);
		this.roomsRef = this.props.firebase.database().ref('rooms');

};

	componentDidMount() {
     	this.roomsRef.on('child_added', snapshot => {
     		const room = snapshot.val();
     		room.key = snapshot.key;
     	this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }


   handleChange(e) {
       e.preventDefault();
       this.setState({
       newRoomsName: e.target.value
     }); 
    }

    handleSubmit(e) {
    	e.preventDefault();
     if (this.state.newRoomsName)
     {
       this.setState({newRoomsName: ''});
       this.roomsRef.push({
       name: this.state.newRoomsName,
       })
     }
    }

   createRoom(newRoomName) {
   		this.roomsRef.push({
   			name: newRoomName,
   		});

   }

render(){
	return( 

		 <section id="room-list">
           {this.state.rooms.map ((room, index) =>
             <li key={index} onClick={() => this.props.setRoom(room)}>{room.name}</li> 
             )
           }

           <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label id="create-room">
                        Create Room: 
                            <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                    </label>
                
                    <input type="submit" value="Submit" /> 

            </form>
      </section>
	);
}

}

export default RoomList;