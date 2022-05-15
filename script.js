
const colorPicker = document.querySelectorAll('.color-block');
const playGround = document.querySelector('.container2');
const playGroundText = document.querySelector("h1");

const bgColor = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"];

//console.log(playGroundText.innerHTML.style);

for(let i = 0; i<colorPicker.length; i++){

    colorPicker[i].addEventListener('click', function(){

        playGround.style.backgroundColor = bgColor[i] ;

        playGround.innerHTML = colorPicker[i].innerHTML;
        playGround.style.alignItems = "center";

        //after 5 seconds of displaying the picked color, playground goes back to initial state
        setTimeout( function(){
            playGround.innerHTML = playGroundText.innerHTML;
            playGround.style.fontSize = "xx-large";
            playGround.style.backgroundColor = "initial";
        }, 5000);
    
    })

};


