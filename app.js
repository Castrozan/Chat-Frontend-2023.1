
const btn = document.getElementById("chat-button");
const display_chat = document.querySelector(".screen-messages");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputMsg = document.getElementById("chat-text-input");
    //inputMsg.style.cssText = 'width: 380px;margin-top: 3%; margin-left: 50px;';

    let txtInput = inputMsg.value;
    if (inputMsg.value != " ") {
        console.log(txtInput);
    
        const messageItem = document.createElement("div");
        messageItem.style.cssText = 'width: 380px;margin-top: 3%; margin-left: 50px;';

        const msgUser = document.createElement("div");
        msgUser.style.cssText = 'margin-left: 150px';

        const nameTitle = document.createElement("strong");
        nameTitle.style.cssText = 'margin-left: 150px;font-family: "Comic Sans MS";';
        const voceDiz = document.createTextNode("Você diz: ");
        nameTitle.appendChild(voceDiz);

        const msgChatUser = document.createElement("div");
        msgChatUser.style.cssText = 'border: 3px solid black;padding: 5px 5px';

        const msgTextUser = document.createElement("text");

        const msgTextUserContent = document.createTextNode(document.getElementById("chat-text-input").value);

        msgTextUser.appendChild(msgTextUserContent);
        msgChatUser.appendChild(msgTextUser);
        msgUser.appendChild(nameTitle);
        msgUser.appendChild(msgChatUser);
        messageItem.appendChild(msgUser);
        
        display_chat.appendChild(messageItem);

        inputMsg.value = " "; 
    }
    
});
