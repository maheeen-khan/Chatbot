function changeMode(event) {

    if (document.body.style.backgroundColor === 'white') {

        document.body.style.backgroundColor = '	#353839';
        document.getElementById('container-fluid').style.background = 'var(--dark-theme)';
        document.getElementById('dark_mode').innerText = `light_mode`;
        document.getElementById('line').style.color = 'white';
        document.getElementById('extra').style.backgroundColor = '#353839';
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
    if(event.keyCode === 13 || event.type === 'click'){

        var myMsg = document.createElement('div');
        myMsg.style.background = 'var(--theme)';
        myMsg.className = 'ms-auto';
        myMsg.style.width = "50%";
        myMsg.style.height = "100px";
        myMsg.style.maxHeight = "160px";
        // myMsg.style.background = "red";
        myMsg.style.color = "white";
        myMsg.style.borderRadius = '9px';
        myMsg.style.marginBottom = '5px';
        myMsg.style.padding = '7px';
        myMsg.innerHTML = `${userInput.value}`;

        document.getElementById("my-msg").appendChild(myMsg);

    }

    if(['hi','hello','hey'].indexOf((userInput.value).toLowerCase()) !== -1){

        setTimeout(function(){

            userInput.value = "";
            // chatMsg.innerHTML = `hello how are you`;
            var chatMsg = document.createElement('div');
            chatMsg.style.background = 'var(--chatbot-msg)';
            chatMsg.style.width = "50%";
            chatMsg.style.height = "100px";
            // chatMsg.style.background = "blue";
            chatMsg.style.color = "white";
            chatMsg.style.borderRadius = '9px';
            chatMsg.style.marginBottom = '5px';
            chatMsg.style.padding = '7px';
            chatMsg.innerHTML =  `hello how are you`;

        document.getElementById("my-msg").appendChild(chatMsg);


        },2000);
      
    }
    
    if(((userInput.value).toLowerCase()).includes('fine') || ((userInput.value).toLowerCase()).includes('good')){

        setTimeout(function(){

            userInput.value = "";
            var chatMsg = document.createElement('div');
            chatMsg.style.background = 'var(--chatbot-msg)';
            chatMsg.style.width = "50%";
            chatMsg.style.maxHeight = "160px";
            // chatMsg.style.background = "blue";
            chatMsg.style.color = "white";
            chatMsg.style.borderRadius = '9px';
            chatMsg.style.marginBottom = '5px';
            chatMsg.style.padding = '7px';
            chatMsg.innerHTML =  `Glad to hear that! Is there anything specific you would like to talk about or need help with today?`;

        document.getElementById("my-msg").appendChild(chatMsg);


        },2000);
    }

    if(((userInput.value).toLowerCase()).includes('how') && ((userInput.value).toLowerCase()).includes('you')){

        setTimeout(function(){

            userInput.value = "";
            var chatMsg = document.createElement('div');
            chatMsg.style.background = 'var(--chatbot-msg)';
            chatMsg.style.width = "50%";
            chatMsg.style.height = "100px";
            // chatMsg.style.background = "blue";
            chatMsg.style.color = "white";
            chatMsg.style.borderRadius = '9px';
            chatMsg.style.marginBottom = '5px';
            chatMsg.style.padding = '7px';
            chatMsg.innerHTML =  `I am Fine. What about you ?`;

        document.getElementById("my-msg").appendChild(chatMsg);


        },2000);
    }
    // else{
    //     userInput.value = "";
    //     chatMsg.innerHTML = `Sorry I have not understand! Please elaborate further.`;
    // }
}
