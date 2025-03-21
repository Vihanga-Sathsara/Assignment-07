let lights = document.querySelectorAll(".light");
console.log(lights);
let currentIndex = 0;
let newIndex = lights.length - 1;
let interval = null;
let audio = document.getElementById("audio");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const containerDiv = document.getElementById("container");
containerDiv.style.flexDirection = "row";

startBtn.addEventListener("click", () => {
    if(!interval){
        interval = setInterval(animation,59);
    }
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    clearInterval(interval);
    interval = null;
});

function animation(){
    audio.play();
    lights.forEach((light) =>{
        light.style.backgroundColor = "white";
    });

    if(currentIndex <= lights.length+4){
        if(currentIndex === 0){
            lights[currentIndex].style.backgroundColor = "red";
        }else if(currentIndex === 1){
            lights[currentIndex].style.backgroundColor = "red";
            let previousIndex = (currentIndex - 1+ lights.length) % lights.length;
            lights[previousIndex].style.backgroundColor = "rgb(244, 66, 66)";
        }else if(currentIndex === 2){
            lights[currentIndex].style.backgroundColor = "red";
            let previousIndex = (currentIndex - 1+ lights.length) % lights.length;
            lights[previousIndex].style.backgroundColor = "rgb(244, 66, 66)";
            let beforeIndex = (previousIndex - 1+ lights.length) % lights.length;
            lights[beforeIndex].style.backgroundColor = "rgb(248, 115, 115)";
        }else if( currentIndex > 2 && currentIndex < lights.length){
            currentIndex = (currentIndex) % lights.length;
            lights[currentIndex].style.backgroundColor = "red";
            let previousIndex = (currentIndex - 1+ lights.length) % lights.length;
            lights[previousIndex].style.backgroundColor = "rgb(244, 66, 66)";
            let beforeIndex = (previousIndex - 1+ lights.length) % lights.length;
            lights[beforeIndex].style.backgroundColor = "rgb(248, 115, 115)";
            let lastIndex = (beforeIndex - 1+ lights.length) % lights.length;
            lights[lastIndex].style.backgroundColor = "rgb(255, 149, 149)";
        }else if(currentIndex === lights.length){
            let previousIndex = (currentIndex - 1+ lights.length) % lights.length;
            lights[previousIndex].style.backgroundColor = "rgb(244, 66, 66)";
            let beforeIndex = (previousIndex - 1+ lights.length) % lights.length;
            lights[beforeIndex].style.backgroundColor = "rgb(248, 115, 115)";
            let lastIndex = (beforeIndex - 1+ lights.length) % lights.length;
            lights[lastIndex].style.backgroundColor = "rgb(255, 149, 149)";
        }else if(currentIndex === lights.length+1){
            let previousIndex = (currentIndex - 1 + lights.length) % lights.length;
            let beforeIndex = (previousIndex - 1+ lights.length) % lights.length;
            lights[beforeIndex].style.backgroundColor = "rgb(248, 115, 115)";
            let lastIndex = (beforeIndex - 1+ lights.length) % lights.length;
            lights[lastIndex].style.backgroundColor = "rgb(255, 149, 149)";
        }else if(currentIndex === lights.length + 2){
            let previousIndex = (currentIndex - 1 + lights.length) % lights.length;
            let beforeIndex = (previousIndex - 1+ lights.length) % lights.length;
            let lastIndex = (beforeIndex - 1+ lights.length) % lights.length;
            lights[lastIndex].style.backgroundColor = "rgb(255, 149, 149)";

        }
        currentIndex++;

        if(currentIndex === lights.length+4){
            currentIndex = 0;
           console.log(containerDiv.style.flexDirection);
           if (containerDiv.style.flexDirection === "row") {
                containerDiv.style.flexDirection = "row-reverse";
           } else {
                containerDiv.style.flexDirection = "row";
           }  
        }
    }
}


