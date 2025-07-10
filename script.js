let category="All";
let close=true;
const emailwrapper = document.getElementById("emailwrapper") 
const buttons = document.querySelectorAll("button");
let star=document.querySelector(".stars")
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        buttons.forEach((ele)=>{
            ele.style.color = '#8fdef2';
        })
        category=button.id;
        update();
        button.style.color="white";
    })
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

        let parallax=-0.002*3
        let x=(e.clientX - window.innerWidth/2) *parallax+40
        let y=(e.clientY - window.innerHeight/2) * parallax+40
        star.style.transform=`translateX(${x}px) translateY(${y}px) translateY(var(--scroll)) rotateZ(20deg)`
        if(getComputedStyle(star).getPropertyValue('--move')==1){
            star.style.setProperty("--scroll", `${-0.3*window.scrollY+30}px`)
        }

})

const projectList=document.querySelectorAll(".projectBox");
let activeProjectList=projectList;
document.addEventListener("scroll", () => {
    if(getComputedStyle(star).getPropertyValue('--move')==1){
    star.style.setProperty("--scroll", `${-0.3*window.scrollY+30}px`)
}

    activeProjectList.forEach((ele,i)=>{
        animate(ele,i,false)
    })
});
function animate(proj,i,refresh) {
    document.getElementById("scroll").style.display="none";
		if(elVis(proj)) {   
        	if(refresh) {
                 proj.style.animationName = 'none';
                 proj.offsetHeight;
       		}
			i%2==0?proj.style.animationName="FadeLeft":proj.style.animationName="FadeRight"         
     	    proj.style.opacity="90%";
		    } else{
                proj.style.opacity="0%";
			    proj.style.animationName=""
    	    }
}
function update() {
    activeProjectList=[]
    let activeIndex=0;
    projectList.forEach((ele)=>{
        if(ele.dataset.cat==category||category=="All"){
            ele.style.display="grid"
            activeProjectList.push(ele)
            animate(ele,activeIndex,true)
            activeIndex++
        }else{
        ele.style.opacity="0%";
		ele.style.animationName=""
        ele.style.display="none"
        }
    })
}

function elVis(el){
    const {top,bottom} = el.getBoundingClientRect();
    const innerHeight = window.innerHeight;
    if(((top < 0) &&(bottom > innerHeight))){
        return true;
    }
    return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight))
}
