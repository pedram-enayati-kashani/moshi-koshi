let parents=document.querySelector(".mouse-killer-desk")
let time=0;
let outTime=0;
let round=1;
let firstRound=true;
let point=0;
let UserPoint;

function createGreenPlace(){
    parents.style.width="40%";
    parents.style.height="300px";
    parents.style.backgroundColor="#2BCD14";
    parents.style.position="relative";
}

function create5HolePlace(callMouse){
    createGreenPlace();
    var randomTop;
    var randomLeft;
    for(let i=1; i<=5 ; i++){
        let hole=  document.createElement("div");
        hole.setAttribute(`id`,`hole${i}`);
        hole.setAttribute(`class`,`hole`);
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
    var passCallmouse=callMouse();
    return passCallmouse;
}

function callMouse(){
    let callMouse=Math.floor(Math.random() * 5) + 1;
    let chosenHole=document.getElementById(`hole${callMouse}`);
    chosenHole.style.backgroundImage="url('./img/vector-simple-cartoon-mouse-svg-odg.jpg')";
    chosenHole.style.backgroundSize="contain";
    return callMouse;
}

let killMouse=create5HolePlace(callMouse);
let deleteTageHole;
let chosenHole;

let myinterval=setInterval(call,300);

function call(){
    time=time+1;
    if(time>outTime&&firstRound==true){
        outTime=time+1;
        firstRound=false;
        round++;
    }
    else if(time<=outTime){
        chosenHole=document.getElementById(`hole${killMouse}`);
        chosenHole.addEventListener('click',killMousefunc)
    }
    else if(time>outTime&&firstRound==false){
        if(round<=10){
            round++;
            deleteTageHole=document.querySelectorAll('.hole');
            for(let i=0;i<deleteTageHole.length;i++){
                deleteTageHole[i].remove();
            }
            outTime=time+3;
            killMouse=create5HolePlace(callMouse);
        }
        else{
            clearInterval(myinterval);
            let h1=  document.createElement("h1");
            parents.appendChild(h1);
            h1.style.fontSize="65px";
            h1.style.marginTop="100px";
            h1.style.fontWeight="600";
            h1.style.textAlign="center";
            h1.innerText="Game over !";
            pointUser(killMousefunc());
        }
    }
}

function killMousefunc(){
    point++;
    deleteTageHole=document.querySelectorAll('.hole');
    for(let i=0;i<deleteTageHole.length;i++){
        deleteTageHole[i].remove();
    }
    return point;
}

function pointUser(a){
    userPoint=a;
    userPoint--;
    let h2UserPoint=  document.createElement("h2");
    let h2MousePoint=  document.createElement("h2");
    parents.appendChild(h2UserPoint);
    parents.appendChild(h2MousePoint);
    h2UserPoint.style.display="inline-block";
    h2MousePoint.style.display="inline-block";
    h2UserPoint.style.marginTop="50px";
    h2UserPoint.style.marginRight="50px";
    h2UserPoint.style.marginLeft="20px";
    h2MousePoint.style.marginTop="50px";
    h2UserPoint.style.fontSize="20px";
    h2MousePoint.style.fontSize="20px"
    h2UserPoint.style.fontWeight="600";
    h2MousePoint.style.fontWeight="600"
    h2UserPoint.innerText= "your point is : "+userPoint;
    h2MousePoint.innerText= "mouse point is : "+(10 - userPoint);
}