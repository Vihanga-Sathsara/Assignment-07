$(document).ready(function (){
    let boxes = document.querySelectorAll(".square");
    let interval = null;

    $(".start").on("click", function(){
        if(!interval){
            interval = setInterval(swapColor,1000);
        }
    });
    $(".stop").on("click", function(){
        clearInterval(interval);
        interval = null;
    });
   

    function swapColor(){
        lastColor = $(boxes[boxes.length-1]).css("background-color");
        for(let index = boxes.length-1; index>0 ; index--){
            $(boxes[index]).css("background-color",$(boxes[index-1]).css("background-color"));
        }
         $(boxes[0]).css("background-color",lastColor);
    }

});