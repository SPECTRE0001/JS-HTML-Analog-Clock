let second=0;
let minute=0;
let hour=0;
let d=new Date();
const audio = document.getElementById("clock-tick");
const playBtn = document.getElementById("b1");
const muteBtn = document.getElementById("b2");
audio.autoplay = true;
audio.loop = true;
setInterval(
    function() {
        d=new Date();
//multiply by 6 to get degree amount (6*60=360)        
        second=d.getSeconds() * 6;
        minute=d.getMinutes() * 6;
        hour=d.getHours() * 6;
        document.getElementById("second-hand").style.transform = "rotate("+second+"deg)";
        document.getElementById("minute-hand").style.transform = "rotate("+minute+"deg)";
        document.getElementById("hour-hand").style.transform = "rotate("+hour+"deg)";
    }, 1000);
playBtn.addEventListener("click", ()=> {if(audio.paused) audio.play();});
muteBtn.addEventListener("click", ()=> {if(!audio.paused) audio.pause();});