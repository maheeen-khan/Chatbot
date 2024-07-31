function changeMode(event) {

    if (document.body.style.backgroundColor === 'white') {

        document.body.style.backgroundColor = '#222222';
        document.getElementById('container-fluid').style.background = 'var(--dark-theme)';
        document.getElementById('dark_mode').innerText = `light_mode`;
        document.getElementById('line').style.color = 'white';
        document.getElementById('extra').style.backgroundColor = 'black';
    }
    else {

        document.body.style.backgroundColor = 'white';
        document.getElementById('container-fluid').style.background = 'var(--theme)';
        document.getElementById('dark_mode').innerText = `dark_mode`;
        document.getElementById('line').style.color = 'black';
        document.getElementById('extra').style.backgroundColor = 'white';

    }

}

function enter(event){
    // var myMsg = document.getElementById('my-msg');
    // var chatMsg = document.getElementById('chatbot-msg');
    if(event.keyCode === 13){

        var myMsg = document.createElement('div');
        myMsg.className = 'ms-auto';
        myMsg.style.width = "100px";
        myMsg.style.height = "100px";
        myMsg.style.background = "red";
        myMsg.style.color = "white";
        myMsg.style.borderRadius = '5px';
        myMsg.style.marginBottom = '5px';
        myMsg.innerHTML = `${userInput.value}`;

        document.getElementById("my-msg").appendChild(myMsg);

    }

    if(['hi','hello','hey'].indexOf(userInput.value) !== -1){

        setTimeout(function(){

            userInput.value = "";
            // chatMsg.innerHTML = `hello how are you`;
            var chatMsg = document.createElement('div');
            chatMsg.style.width = "100px";
            chatMsg.style.height = "100px";
            chatMsg.style.background = "blue";
            chatMsg.style.color = "white";
            chatMsg.style.borderRadius = '5px';
            chatMsg.style.marginBottom = '5px';
            chatMsg.innerHTML =  `hello how are you`;

        document.getElementById("my-msg").appendChild(chatMsg);


        },2000);
      
    }

    // else{
    //     userInput.value = "";
    //     chatMsg.innerHTML = `Sorry I have not understand! Please elaborate further.`;
    // }
}
