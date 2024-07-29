function changeMode(){

    if(document.body.style.backgroundColor !== '#222222'){
        document.body.style.backgroundColor = '#222222';
        document.getElementById('container-fluid').style.background = 'var(--dark-theme)';
        document.getElementById('dark_mode').innerText = `light_mode`;
    }
    else{
        console.log("hello");
        document.body.style.backgroundColor = 'white';
        document.getElementById('container-fluid').style.background = 'var(--theme)';
        document.getElementById('dark_mode').innerText = `dark_mode`;
    }

}
