function changeMode(event){

    if(document.body.style.backgroundColor === 'white'){

        document.body.style.backgroundColor = '#222222';
        document.getElementById('container-fluid').style.background = 'var(--dark-theme)';
        document.getElementById('dark_mode').innerText = `light_mode`;
        console.log(event);

    }
    else{
        
        document.body.style.backgroundColor = 'white';
        document.getElementById('container-fluid').style.background = 'var(--theme)';
        document.getElementById('dark_mode').innerText = `dark_mode`;
        console.log(event);

    }

}
