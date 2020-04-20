
var a=document.querySelectorAll(".drum");


a.forEach(function(neww){
   neww.addEventListener("click",function(){

     var i=this.innerHTML;
   //alert(i);
   play(i);
   animate(i);
   
    });
   });
    document.addEventListener("keypress",function(event){
       var i=event.key;
      // alert(i);
       play(i);
       animate(i);


    });

var play=function(i){
if(i=="w"){
     var a=new Audio("sound/crash.mp3");
     a.play();
  }
  else  if(i=="a"){
     var a=new Audio("sound/kick.mp3");
     a.play();
  }
  else  if(i=="s"){
     var a=new Audio("sound/snare.mp3");
     a.play();
    
  } else  if(i=="d"){
     var a=new Audio("sound/tom-1.mp3");
     a.play();
  } else  if(i=="j"){
     var a=new Audio("sound/tom-2.mp3");
     a.play();
  } else  if(i=="k"){
     var a=new Audio("sound/tom-3.mp3");
     a.play();
  }
  else  if(i=="l"){
     var a=new Audio("sound/tom-4.mp3");
     a.play();
  }
}



var animate=function(i){
   document.querySelector("."+i).classList.add("pressed");
   setTimeout(function () {
      document.querySelector("."+i).classList.remove("pressed");

   }),100;

}