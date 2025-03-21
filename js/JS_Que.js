$(document).ready(function (){
    let interval = null;
    
    $("#start").on("click", function(){
        if(!interval){
            interval = setInterval(swap,1000);
        }
    });
    $("#stop").on("click", function(){
        clearInterval(interval);
        interval = null;
    });
   

    function swap(){
        let lastMan = $(".mangif").children().last();
        $(lastMan).detach();
        $(".mangif").prepend(lastMan);
    }

});