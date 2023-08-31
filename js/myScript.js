var parents=document.querySelector(".mouse-killer-desk");
var time=0;
var outTime=4;
var round=1;
var init=false;

function createGreenPlace(){
    parents.style.width="40%";
    parents.style.height="300px";
    parents.style.backgroundColor="#2BCD14";
    parents.style.position="relative";
}

function create5HolePlace(){
    createGreenPlace()
    var randomTop;
    var randomLeft;
    for(let i=1; i<=5 ; i++){
        var hole=  document.createElement("div");
        hole.setAttribute(`id`,`hole${i}`)
        parents.appendChild(hole);
        randomTop=Math.floor(Math.random() * 280) + 0;
        randomLeft=Math.floor(Math.random() * 732) + 0;
        hole.style.position="absolute";
        hole.style.left=`${randomLeft}px`;
        hole.style.top=`${randomTop}px`;
        hole.style.width="20px";
        hole.style.height="20px";
        hole.style.backgroundColor="#FF0070";
        hole.style.border="2px solid yellow";
        hole.style.borderRadius="50%";
    }
    callMouse()
}

function callMouse(){
    var callMouse=Math.floor(Math.random() * 5) + 1;
    var chosenHole=document.getElementById(`hole${callMouse}`);
    chosenHole.style.backgroundImage="url('./img/vector-simple-cartoon-mouse-svg-odg.jpg')";
    chosenHole.style.backgroundSize="contain";
}

setInterval(call,5000);

function call(){
    time=time+1;
    if(time<=outTime&&init==true){
        
    }
}

call()
create5HolePlace()