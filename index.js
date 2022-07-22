for (var i=0 ;i< document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
        var btn= this.innerHTML;
        buttonAnimation(btn);
        switch(btn){
            case "w":
                var tom1 =new Audio("sounds/sounds_tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 =new Audio("sounds/sounds_tom-2.mp3");
                tom2.play();
            case "s":
                var tom3 =new Audio("sounds/sounds_tom-3.mp3");
                tom3.play();
            case "d":
                    var tom4 =new Audio("sounds/sounds_tom-4.mp3");
                    tom4.play();

            case "j":
                    var snare =new Audio("sounds/sounds_snare.mp3");
                    snare.play();
            case "k":
                var crash =new Audio("sounds/sounds_crash.mp3");
                crash.play();
            case "l":
                var kick =new Audio("sounds/sounds_kick-bass.mp3");
                kick.play();

        } 
    })
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event) {
        soundkey(event.key);
        buttonAnimation(event.key);
    });
        
        function soundkey (key) {
            switch(key){
                case "w":
                var tom1 =new Audio("sounds/sounds_tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 =new Audio("sounds/sounds_tom-2.mp3");
                tom2.play();
            case "s":
                var tom3 =new Audio("sounds/sounds_tom-3.mp3");
                tom3.play();
            case "d":
                    var tom4 =new Audio("sounds/sounds_tom-4.mp3");
                    tom4.play();

            case "j":
                    var snare =new Audio("sounds/sounds_snare.mp3");
                    snare.play();
            case "k":
                var crash =new Audio("sounds/sounds_crash.mp3");
                crash.play();
            case "l":
                var kick =new Audio("sounds/sounds_kick-bass.mp3");
                kick.play();

            }

        }
}

function buttonAnimation(currentkey){
    var activebtn = document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}
