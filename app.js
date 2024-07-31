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
    var myMsg = document.getElementById('my-msg');
    var chatMsg = document.getElementById('chatbot-msg');
    if(event.keyCode === 13){
        myMsg.innerHTML = `${userInput.value}`;
    }

    if(['hi','hello','hey'].indexOf(userInput.value) !== -1){

        userInput.value = "";
        chatMsg.innerHTML += `hello how are you`;
        console.log('hello');
    }
}
