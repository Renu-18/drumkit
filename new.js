var a=document.querySelectorAll(".drum");
a.forEach(function(neww){
    neww.addEventListener("click",function(){


        var i=this.id;
   
        if(i=="d1"){
         //  setTimeout(function(){
           var a=new Audio("sound/crash.mp3");
           a.play();
       //},1000);
        }
        else  if(i=="d2"){
           var a=new Audio("sound/kick.mp3");
           a.play();
        }
        else  if(i=="d3"){
           var a=new Audio("sound/snare.mp3");
           a.play();
          
        } else  if(i=="d4"){
           var a=new Audio("sound/tom-1.mp3");
           a.play();
        } else  if(i=="d5"){
           var a=new Audio("sound/tom-2.mp3");
           a.play();
        } else  if(i=="d6"){
           var a=new Audio("sound/tom-3.mp3");
           a.play();
        }
        else  if(i=="d7"){
           var a=new Audio("sound/tom-4.mp3");
           a.play();
        }
    });
});


    a.forEach(function(neww){
    document.addEventListener("keypress",function(event){
        var i=this.id;
   
     if(i=="d1"){
      //  setTimeout(function(){
        var a=new Audio("sound/crash.mp3");
        a.play();
    //},1000);
     }
     else  if(i=="d2"){
        var a=new Audio("sound/kick.mp3");
        a.play();
     }
     else  if(i=="d3"){
        var a=new Audio("sound/snare.mp3");
        a.play();
       
     } else  if(i=="d4"){
        var a=new Audio("sound/tom-1.mp3");
        a.play();
     } else  if(i=="d5"){
        var a=new Audio("sound/tom-2.mp3");
        a.play();
     } else  if(i=="d6"){
        var a=new Audio("sound/tom-3.mp3");
        a.play();
     }
     else  if(i=="d7"){
        var a=new Audio("sound/tom-4.mp3");
        a.play();
     }

});


});



