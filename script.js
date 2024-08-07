   // A simple chatbot that responds with some predefined answers
   function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Rehmat Ullah.";
    } else if (input.includes("what can you do")) {
        output = "I am a software engineering student.";
    } else if (input.includes("who is adil amin")) {
        output = "Adil Amin is an associate software engineer at Knine.";
    } else if (input.includes("adil amin belongs to")) {
        output = "Adil Amin belongs to Ahmad Pur Sharkiya.";
    } else if (input.includes("which skills does adil amin have")) {
        output = "Adil Amin is skilled in MERN Stack and Blockchain Development.";
    } else if (input.includes("who is zeeshan ramzan")) {
        output = "A graduate software engineer from from islamia university of bahawalpur .";
    } else if (input.includes("what is the mern stack")) {
        output = "MERN Stack is a combination of MongoDB, Express.js, React, and Node.js used for web development.";
    } else if (input.includes("what is blockchain")) {
        output = "Blockchain is a decentralized digital ledger that records transactions across multiple computers securely.";
    } else if (input.includes("who is the founder of javascript")) {
        output = "JavaScript was created by Brendan Eich in 1995.";
    } else if (input.includes("what is knine")) {
        output = "Knine is a software company where Adil Amin works as an associate software engineer.";
    } else if (input.includes("who is faheem nasir ")) {
        output = "Faheem nasir is a graduate software engineer from islamai university of bahawalpur .";
    } else if (input.includes("what is css")) {
        output = "CSS stands for Cascading Style Sheets, and it's used to style and layout web pages.";
    } else if (input.includes("what is javascript")) {
        output = "JavaScript is a programming language that allows you to implement complex features on web pages.";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    userAvatar.innerHTML = "U";
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    botAvatar.innerHTML = "B";
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});