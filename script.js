let parity=-1
let firstElementFound;
let date="All";
let close=true;
const emailwrapper = document.getElementById("emailwrapper") 
const buttons = document.querySelectorAll("button");
let stars=document.querySelectorAll(".stars")
buttons.forEach(button=>{
if(button.id!="emailclose"){
    button.addEventListener('click',()=>{
        date=button.id;
        update();
        button.style.color="white";
    })
}
})
document.getElementById("emailbutton").addEventListener("click",()=>{
    emailwrapper.style.display="flex";
    document.getElementById("emailBox").style.display="flex";
})
document.getElementById("emailbutton").addEventListener("mouseleave",()=>{
    emailwrapper.style.display="none";
    document.getElementById("emailBox").style.display="none";
    close=true
})
document.body.addEventListener("mousedown",(e)=>{
    if(e.target!=document.getElementById("emailbutton")&&e.target!=document.getElementById("linkimage")&&e.target!=emailwrapper&&e.target!=document.getElementById("emailBox")){
    emailwrapper.style.display="none";
    close=true
    }
})
document.body.addEventListener("mousemove",(e)=>{ //Parallax  
    if(stars.length==1){
    //document.querySelector(".starWrapper").innerHTML='<div class="stars"></div><div class="stars"></div><div class="stars"></div>'
    stars=document.querySelectorAll(".stars")
    }
    stars.forEach((star,i)=>{
        let parallax=-0.002*((i+1)*3)
        let x=(e.clientX - window.innerWidth/2) *parallax+(i*40)
        let y=(e.clientY - window.innerHeight/2) * parallax+(i*40)
        star.style.transform=`translateX(${x}px) translateY(${y}px) translateY(var(--scroll)) rotateZ(20deg)`
        if(getComputedStyle(star).getPropertyValue('--move')==1){
            star.style.setProperty("--scroll", `${(-0.3/(stars.length-(i)))*window.scrollY+(i*30)}px`)
        }
    })
})

const projectList=document.querySelectorAll(".projectBox");
for(let i=0;i<projectList.length;i++) {
    projectList[i].style.opacity="0%";
}
document.addEventListener("scroll", () => {
    stars.forEach((star,i)=>{
    if(getComputedStyle(star).getPropertyValue('--move')==1){
    star.style.setProperty("--scroll", `${(-0.3/(stars.length-(i)))*window.scrollY+(i*30)}px`)
}
    })
    for(let i=0;i<projectList.length;i++) {
    checkParity();
    animate(i,false);}
});
function animate(i,refresh) {
    document.getElementById("scroll").style.display="none";
    let proj= projectList[i]
	if(date=="All"||date==proj.dataset.date) {
        proj.style.display="grid"
		if(elVis(proj)||(!firstElementFound)) {   
        	if(refresh) {
                 proj.style.animationName = 'none';
                 proj.offsetHeight;
       		}
			i%2==parity?proj.style.animationName="FadeLeft":proj.style.animationName="FadeRight"         
     	    proj.style.opacity="90%";
		    } else if(!elVis(proj)){
                proj.style.opacity="0%";
			    proj.style.animationName=""
    	    }
            firstElementFound=true;
    } else {
      	proj.style.opacity="0%";
		proj.style.animationName=""
        proj.style.display="none"
    }
}
function update() {
parity=-1
for(x = 0; x < buttons.length; x++){buttons[x].style.color = '#8fdef2';}
 firstElementFound=false;
   checkParity();
    for(let i=0;i<projectList.length;i++) {
    animate(i,true);
    }
}
function checkParity(){
	 parity=-1;
    for(let i=0;i<projectList.length;i++){
    	if((date=="All"||date==projectList[i].dataset.date)&&parity==-1){
            parity=i%2;
        }
    }
}

function elVis(el){
    const {top,bottom} = el.getBoundingClientRect();
    const innerHeight = window.innerHeight;
    if(((top < 0) &&(bottom > innerHeight))){
        return true;
    }
    return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight))
}
