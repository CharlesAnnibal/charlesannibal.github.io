import React, { useEffect, useState } from 'react';
import { ChatWrapper } from './style.js';
import { HubConnectionBuilder } from '@microsoft/signalr';

const Chat = () => {

  const [messageList, setMessageList] = useState([])
  const [connection, setConnection] = useState(new HubConnectionBuilder()
    .withUrl("https://localhost:5001/chat")
    .withAutomaticReconnect()
    .build());

  connection.start().then(function () {
    console.log("conection started")
    //document.getElementById("sendButton").disabled = false;
  }).catch(function (err) {
    return console.error(err.toString());
  });

  const ChatImplementation = () => {


    //Disable send button until connection is established
    //document.getElementById("sendButton").disabled = true;

    connection.on("ReceiveMessage", function (user, message) {
      const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      console.log(user, msg)

      const encodedMsg = user + " says " + msg;

      const newList = messageList.concat([encodedMsg])
      setMessageList(newList)

      //var li = document.createElement("li");
      //li.textContent = encodedMsg;
      //document.getElementById("messagesList").appendChild(li);
    });



    //connection.off("ReceiveMessage");



  }

  ChatImplementation()

  useEffect(() => {


    return function cleanup() {
      //connection.off("ReceiveMessage");
    }
  })

  const _sendMessage = () => {
    console.log("clicou")
    var user = document.getElementById("user").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
      return console.error(err.toString());
    });
    //event.preventDefault();
  }


  let list =
    messageList.length > 0
      ? messageList.map((message, index) => {
        return (
          <li>
            {message}
          </li>
        );
      })
      : "";

  return (
    <ChatWrapper className="chat">
      <p>test</p><input type="text" id="user"></input>
      <input type="text" id="messageInput"></input>
      <ul id="ReceiveMessage">{list}</ul>
      <button id="sendButton" onClick={(event) => { event.stopPropagation(); _sendMessage() }}>Enviar</button>
    </ChatWrapper>
  );
};
export default Chat;
