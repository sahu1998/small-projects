const socket = io();

let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");

let userName;
do {
  userName = prompt("Enter your name");
} while (!userName);

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});

function sendMessage(message) {
  let msg = { userName, message: message.trim() };
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrollToBottom();
  socket.emit("send_message", msg);
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  mainDiv.classList.add(type, "message");
  let userType = type === 'incoming' ? 'receiver' : 'sender'
  mainDiv.innerHTML = `
        <h4 class=${userType}>${msg.userName}</h4>
        <p>${msg.message}</p>
    `;
  messageArea.appendChild(mainDiv);
}

socket.on("receive_message", (msg) => {
    console.log(msg)
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
