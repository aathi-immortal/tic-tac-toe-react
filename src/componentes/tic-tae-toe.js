// import React, { Component } from "react";
// import io from "socket.io-client"; // Import Socket.io client

// class TicTacToeGame extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           buttons: [],
//           id_prefix: "tile-",
//           chanceX: true,
//           isEmptybox: true,
//           userName: "",
//           receiverName: "",
//           socket: null, // Replace stomp with socket
//           userId: "",
//         };
        
//         this.buttonsContainerRef = React.createRef(); // Initialize the ref
//       }
      
//       componentDidMount() {
//         this.addEventListenerToAllButtons(); // Moved this up
//         this.loadTheButtons();
//       }
      
//   connect = () => {
//     // Create a Socket.io connection
//     this.state.socket = io("http://localhost:8080"); // Replace with your server's address

//     this.state.socket.on("connect", () => {
//       console.log("Connected");
//       this.state.socket.emit("join", { userName: this.state.userName }); // Join the server with the username
//     });

//     this.state.socket.on("/gameRoom/public", (message) => {
//       const { messageContent, bodyId } = message;
//       this.updateMark(bodyId, messageContent);
//     });

//     this.state.socket.on("/user/game/private", (message) => {
//       const { messageContent, bodyId } = message;
//       this.updateMark(bodyId, messageContent);
//     });

//     this.state.socket.on("/user/game/createRoom", (message) => {
//       const { messageContent, bodyId, room } = message;
//       console.log(room);
//       console.log(room.roomId);
//       this.subscribeTo(room.roomId);
//     });

//     this.state.socket.on("/user/game/private", (message) => {
//       console.log("ko");
//       const { messageContent, bodyId } = message;
//       this.updateMark(bodyId, messageContent);
//     });
//   };

//   subscribeTo = (id) => {
//     this.displayTheuserId(id);
//     // Implement your subscription logic here using Socket.io
//   };

//   displayTheuserId = (id) => {
//     this.setState({ userId: id });
//     console.log(this.state.userId);
//   };

//   sendMessage = (symbol, id) => {
//     const movesOb = {
//       sender: this.state.userName,
//       receiver: this.state.receiverName,
//       bodyId: id,
//       messageContent: symbol,
//     };
//     this.state.socket.emit("privateMove", movesOb);
//   };

//   createRoom = () => {
//     const movesOb = {
//       sender: this.state.userName,
//       receiver: this.state.receiverName,
//     };
//     this.state.socket.emit("createRoom", movesOb);
//   };

//   updateMark = (index, mark) => {
//     const updatedButtons = [...this.state.buttons];
//     const tileDiv = updatedButtons[index].querySelector("div");
//     tileDiv.textContent = mark;
//     this.setState({
//       buttons: updatedButtons,
//       chanceX: !this.state.chanceX,
//     });
//   };

//   addEventListenerToAllButtons = () => {
//     this.state.buttons.forEach((button, index) => {
//       button.isEmptybox = true;
//       button.addEventListener("click", () => {
//         if (button.isEmptybox) {
//           let symbol = "O";
//           if (this.state.chanceX) {
//             symbol = "X";
//           }
//           this.sendMessage(symbol, index);
//         }
//       });
//       button.addEventListener("mouseenter", () => {
//         if (button.isEmptybox) {
//           if (this.state.chanceX) {
//             const tileDiv = this.state.buttons[index].querySelector("div");
//             tileDiv.textContent = "X";
//           } else {
//             const tileDiv = this.state.buttons[index].querySelector("div");
//             tileDiv.textContent = "O";
//           }
//         }
//       });
//       button.addEventListener("mouseleave", () => {
//         if (button.isEmptybox) {
//           const tileDiv = this.state.buttons[index].querySelector("div");
//           tileDiv.textContent = "";
//         }
//       });
//     });

//     const submitButton = document.getElementById("submit-button");
//     submitButton.addEventListener("click", () => {
//       // this.setState({ userName: document.getElementById("user-name").value });
//       // this.setState({ receiverName: document.getElementById("opp-name").value });
//       this.connect();
//       setTimeout(() => {
//         this.createRoom();
//       }, 3000);
//     });
//   };

//   loadTheButtons = () => {
//     const buttonsContainer = this.buttonsContainerRef.current;
//     const updatedButtons = buttonsContainer.querySelectorAll("button");
//     this.setState({ buttons: updatedButtons });
//   };
  

//   render() {
//     return (
//       <div>
//         <div>
//           User ID: <span id="user-id">{this.state.userId}</span>
//         </div>
//         {/* Render your game board buttons here */}
//         <div className="game-board" ref={this.buttonsContainerRef}>
//             {this.state.buttons.map((button, index) => (
//                 <button
//                 key={index}
//                     onClick={() => this.handleButtonClick(index)}
//                     ></button>
//             ))}
//         </div>
//         <button onClick={this.handleCreateRoom}>Create Room</button>
//         {/* Other JSX for your user input fields and submit button */}
//       </div>
//     );
//   }
// }

// export default TicTacToeGame;
