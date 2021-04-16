
(function(){

    var doc_height = document.body.clientHeight ,
        doc_width = document.body.clientWidth ;

    var bee = document.getElementById("mouse-follower");
    bee.style.position = 'absolute';
    document.addEventListener("mousemove", getMouse);


    var beepos = {x:0, y:0};

    setInterval(followMouse, 5);

    var mouse = {x:0, y:0}; //mouse.x, mouse.y

    var dir = "right";
    function getMouse(e){
     mouse.x = e.pageX;
     mouse.y = e.pageY;
       //Checking directional change
       if(mouse.x > beepos.x){
         dir = "right";
       } else {
         dir = "left";
       }

    }

    function followMouse(){
     //1. find distance X , distance Y
     var distX = mouse.x - beepos.x;
     var distY = mouse.y - beepos.y;
     //Easing motion
      //Progressive reduction of distance
     beepos.x += distX/5;
     beepos.y += distY/2;

     bee.style.left = (beepos.x - 9) + "px";
     bee.style.top = (beepos.y - 9) + "px";

       //Apply css class
       if (dir == "right"){
         bee.setAttribute("class", "right");
       } else {
         bee.setAttribute("class", "left");
       }

       if(mouse.x > (doc_width - 33)  ){
         bee.style.left = (doc_width - 33) + "px";
       }
       if( mouse.y > (doc_height - 60)){
         bee.style.top = (doc_height - 60) + "px";
       }

     }

}());
