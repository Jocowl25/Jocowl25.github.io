let total=-1
var date="All";
const buttons = document.querySelectorAll("button");
buttons.forEach(button=>{
button.addEventListener('click',()=>{
date=button.id;
update();
button.style.color="white";
})
})
var test=document.getElementById("test")
var test2=document.getElementById("test2")
class project {
  constructor(date,title,desc,image,link) {
    this.date = date;
    this.title = title;
    this.desc=desc;
    this.image="Images/"+image;
    this.link=link;
  }
}
const projectList=[
new project("2022","Scratch (Pre 2022)",
"If you haven't heard about it before, Scratch is a website designed for teaching children coding concepts through premade blocks. I made a lot of projects on here before getting into real coding. Links to my profiles are below.",
"Scratch.png"
,["https://scratch.mit.edu/users/TumbleBee55/","https://scratch.mit.edu/users/TumbleWasp55/"]), //multiple links for project
new project("2022","Random Scratch URL (v1)",
"This was my first attempt at a \"Random Scratch Project\" Button. Couldn't find an API to use fetch with (that didn't have CORS security), so it isn't that good or even automatic. It was what finally got me into into real coding, though, so it has a special place in my heart.<br> Made with p5.js.",
"RandomScratch v1.png"
,["https://editor.p5js.org/jocowl25/full/QEqZ-2LDH"]),
new project("2023","Square Diagram",
"This was made to see what happens when you take the hypotenuse of a square, make it the side of a new square, and put that square around the first. It was a simple—” but fun—” experiment. The graph represents the change in side length over time.<br>Made with p5.js.",
"Square thing.png",
["https://editor.p5js.org/jocelyna2551/full/NNpEcqFIu"]),
new project("2023","Weaver But Better",
"Weaver is a spinoff of Wordle where you change a word by one letter to get to the goal word. This is like that, but slightly different.<br> Made with p5.js.",
"Weaver.png",
["https://editor.p5js.org/jocowl25/full/WVTKVum9v"]),
new project("2023","Blackjack",
"This started as just a basic, console based Blackjack game to learn Java. However, over the next few months I added more features, including betting modes and a high score system. Since Replit now prevents projects from running without an account, use the Javascript port below to actually play.<br> Originally made with Java.",
"Blackjack.png",["Original:","https://replit.com/@jocowl/Blackjack","Javascript Port:","https://codepen.io/Jocowl/full/MWdypYJ"]),
new project("2023","Rock Paper Scissors",
"A simple Rock Paper Scissors game against a computer, with a display for the probability of getting to that point. Inspired by a CGPGrey video (youtube.com/watch?v=PmWQmZXYd74), this was the first Javascript program I made without p5.js.<br> Made with HTML, CSS, and Javascript.",
"RPS.png",["https://js.do/jocowl/715827"]),
new project("2023","Line Bouncing In A Square/Box",
"You know when the DVD logo bounces around on a screen until it reaches the corner? This is a version of the path a line would take when doing that. In addition, the rectangle it bounces in is resizeable. I also made a 3d version, where the line bounces in a box. <br>Made with p5.js.",
"DVDthing.png",["2D version:","https://editor.p5js.org/jocowl25/full/Jl7qkOInW","3D version:","https://editor.p5js.org/jocowl25/full/ZtzgUc9ps"]),
new project("2023","Grapher",
"This is a graphing calculator with an input for one equation and a readjustable zoom. It was harder to make than I thought; I ended up having to recreate PEMDAS manually due to the input being a string. Although this was harder than I thought it would be, it was very rewarding. <br> Made with p5.js.",
"Grapher.png",["https://editor.p5js.org/jocowl25/full/Y3oCqWg1x"]),
new project("2023","Random Scratch Project (v2)",
"Scratch is a children's website for block-based coding. Since Scratch has no \"random project\" button, I made one myself. This is an improved version of one I made in 2022; this time it uses fetch and is actually automatic. If you like Scratch and you're bored, give this a try.<br> Made with HTML, CSS, and Javascript.",
"RandomScratch v2.png",["https://js.do/jocowl/715403"]),
new project("2023","This Website",
"You already know what this is. This was my first time animating with CSS and I think it looks pretty cool. After 000Webhost stopped hosting the website for free, I moved the page to Github.<br> Made with HTML, CSS, and Javascript.",
"Recursivewebsitelol.png",["https://github.com/Jocowl25/Jocowl25.github.io"]),
new project("2023","Bad Apple Generator",
"Based on an internet trend from the 2010s, this recreates the Bad Apple youtube video out of the user's letters of choice. I used a separate program to create data for each frame of the video, which is stored in this program to recreate the frames with characters. I recommend inputing emojis- it looks very cool.<br> Made with HTML, CSS, and p5.js.",
"BadApple.png",["https://editor.p5js.org/jocowl25/full/jFSNRb_1L"]),
new project("2024","Punnett Square Generator",
"A Punnett Square is a biology table used to illustrate all the possible outcomes of a genetic cross. This program generates one with a theoretically infinite number of different traits that can be crossed at the same time. However, after about eleven different traits the number of combonations is so large that the program freezes. Other Punnett Square generators never go higher than five, though, so I'm happy with the results. <br> Made with HTML, CSS, and Javascript.",
"Punnett Square.png",["https://codepen.io/Jocowl/full/yLweJKP"]),
new project("2024","Light Metronome",
"Have you ever listened to a song while seeing a light blink or hearing a noise just out of sync with the music? That's what the Light Metronome is for! If you tap to the beat of the song, the light continues to flash at that rate. The BPM can also be set manually. While the program seems simple in concept, it was actually somewhat difficult to make. I'm very proud of it, though— especially the menu.<br> Made with HTML, CSS, and Javascript.",
"Light Metronome.png",["https://codepen.io/Jocowl/full/zYXOMKd"]),
];
for(i=(projectList.length-1);i>-1;i--) {
	copyElement("template",i,"content");
    setProjectIds();
	setElements();
    document.getElementById(i).style.opacity="0%";
}

document.addEventListener("scroll", (event) => {
    for(i=0;i<projectList.length;i++) {
    checkParity();
    animate(i,false);}
});
function setElements() {
	document.getElementById(i+"date").innerHTML=projectList[i].date+":";
	document.getElementById(i+"title").innerHTML=projectList[i].title;
	document.getElementById(i+"desc").innerHTML=projectList[i].desc;
    document.getElementById(i+"date").style.display="none";
    document.getElementById(i+"image").src=projectList[i].image;
            document.getElementById(i+"desc").innerHTML +="<br>"
            document.getElementById(i+"desc").innerHTML +="<br>"
            document.getElementById(i+"desc").innerHTML +="<span>"
    for(a=0;a<projectList[i].link.length;a++) {
    	if(projectList[i].link[a].substr(0, 3)==("htt")){
        document.getElementById(i+"desc").innerHTML += `<a style="display:block;font-size: 2vw;color:#8fdef2" href=${projectList[i].link[a]} target="_blank">${projectList[i].link[a]}</a>`;
        }else{
            if(a!=0){
                document.getElementById(i+"desc").innerHTML +="<br>"
            }
            document.getElementById(i+"desc").innerHTML +=projectList[i].link[a]
        }
    }
}
function animate(i,refresh) {
document.getElementById("scroll").style.display="none";
var proj= document.getElementById(i)
	if(date=="All"||date==projectList[i].date) {
        document.getElementById(i).style.display="grid"
		if(elVis(document.getElementById(i),true)||(!top)) {   
        	if(refresh) {
        proj.style.animationName = 'none';
        proj.offsetHeight;
       		 }
			i%2==total?proj.style.animationName="FadeLeft":proj.style.animationName="FadeRight"         
     		proj.style.opacity="100%";
		} else if(!elVis(document.getElementById(i),true)){
            proj.style.opacity="0%";
			proj.style.animationName=""
    	}
        top=true;
     } else {
      	proj.style.opacity="0%";
			proj.style.animationName=""
             document.getElementById(i).style.display="none"
     }
}
function update() {
total=-1
test.innerHTML=""
for(x = 0; x < buttons.length; x++){buttons[x].style.color = '#8fdef2';}
	let top=false;
   checkParity();
    for(i=projectList.length-1;i>=0;i--) {
    animate(i,true);
    }
}
function checkParity(){
	 total=-1;
    for(let i=projectList.length-1;i>=0;i--){
    	if((date=="All"||date==projectList[i].date)&&total==-1){
        	total=i%2;
        }
    }
}
function setProjectIds() {
document.getElementById("date").id="tmpdate"
	document.getElementById("title").id="tmptitle"
	document.getElementById("desc").id="tmpdesc"
    document.getElementById("image").id="tmpimage"
	document.getElementById("date").id=i+"date"
	document.getElementById("title").id=i+"title"
	document.getElementById("desc").id=i+"desc"
    document.getElementById("image").id=i+"image"
	document.getElementById("tmpdate").id="date"
	document.getElementById("tmptitle").id="title"
	document.getElementById("tmpdesc").id="desc"
    document.getElementById("tmpimage").id="image"
	document.getElementById(i).style.display="grid";
}
function copyElement(elementId,newId,id) {
	let original=document.getElementById(elementId);
	let nue=original.cloneNode(true);
    let div=document.getElementById(id);
   div.appendChild(nue)
	nue.id=newId;
}
const elVis = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
