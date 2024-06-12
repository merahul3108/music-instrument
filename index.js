
for(var i=0; i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //         var audio =  new Audio("sounds/kick-bass.mp3");
    //    audio.play();

        var btnInnerHTML = this.innerHTML;

        switch (btnInnerHTML) {
            case "R":
               var audio = new Audio("crash.mp3")
                audio.play();
                break;

                case "A":
                    var audio = new Audio("kick-bass.mp3")
                     audio.play();
                     break;

                     case "H":
                        var audio = new Audio("tom-1.mp3")
                         audio.play();
                         break;

                         case "U":
                            var audio = new Audio("tom-2.mp3")
                             audio.play();
                             break;

                             case "L":
                                var audio = new Audio("snare.mp3")
                                 audio.play();
                                 break;

                                 case "K":
                                    var audio = new Audio("tom-4.mp3")
                                     audio.play();
                                     break;

                                     case "M":
                                        var audio = new Audio("tom-3.mp3")
                                         audio.play();
                                     default:
                                         break;

                                         

        }
         });
    }
