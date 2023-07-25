// $(document).ready(function (){
//     $("div#mouse").css("display","none")
//     $("div#mouse").click(function(){
//         console.log(this)
//     })
// })

let myMouse = document.getElementsByClassName('mouse');
window.onload = function () {
    let dateNow = 0;
    let timeFu = 2;
    let timeStop=false;
    let round=1;
    let point=0;
    let mousePoint=0;
    let int= setInterval(() => {
        let random = Math.floor(Math.random() * 10);
        dateNow += 1;
        if(timeStop==false && dateNow < timeFu){
            for (let i = 0; i < myMouse.length; i++) {
                if (i == random) {
                    myMouse[i].classList.add('active-mouse');
                }
            }
            timeStop=true;
        }
        if(dateNow < timeFu){
            let activeMouse= document.querySelector('.active-mouse');
            activeMouse.addEventListener('click' , (event)=>{
                if(round<=10){
                    point+=1;
                }
                event.stopPropagation();
            })
        }
        if(timeStop==true && dateNow >= timeFu && round<10){
            timeStop=false;
            for (let j = 0; j < myMouse.length; j++) {
                myMouse[j].classList.remove('active-mouse')
            }
            timeFu=dateNow+2;
            round+=1;
            if(round==10){
                clearInterval(int);
                mousePoint= point - 10;
                console.log("round : "+round+" - "+"your point : "+point+" - "+"mouse point : "+mousePoint)
            }
        }
    }, 1000)
}

// console.log(random);