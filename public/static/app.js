const socket = io('http://localhost:3000');
const msgBox = document.getElementById('exampleFormControlTextarea1');
const msgCont = document.getElementById('data-container');
const email = document.getElementById('email');

//get old messages from the server
const messages = [];

function getMessages() {
  fetch('http://localhost:3000/api/chat')
    .then((response) => response.json())
    .then((data) => {
      loadDataMessage(data);
      if (data && data.length) {
        data.forEach((el) => {
          messages.push(el);
        });
      }
    })
    .catch((err) => console.error(err));
}

getMessages();

//When a user press the enter key,send message.
msgBox.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    sendMessage({ email: email.value, text: e.target.value });
    e.target.value = '';
  }
});

//Display messages to the users
function loadDataMessage(data = []) {
  let messages = '';
  if (data && data.length) {
    data.map((message) => {
      messages += ` <li class="bg-primary p-3 rounded mb-2 text-light ${
        message.email === email.value ? 'myMsg' : ''
      }">
        <div class="fw-bolder">${message.email}</div>
        <div class="">${message.text}</div>
      </li>`;
    });
    msgCont.innerHTML = messages;
  }
}

//socket.io
//emit sendMessage event to send message
function sendMessage(message) {
  socket.emit('sendMessage', message);
}

//Listen to recMessage event to get the messages sent by users
socket.on('recMessage', (message) => {
  messages.push(message);
  loadDataMessage(messages);
});
