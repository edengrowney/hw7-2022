var video = document.querySelector("video");
var time; 
var volume = document.getElementById("slider").value;

//function to play video that will be used later
function playVideo() { 
    video.play(); 
	document.getElementById("volume").innerHTML = volume + "%";
} 
//function to pause video that will be used later
function pauseVideo() { 
    video.pause(); 
}
//function to sloq video that will be used later
function slowVideo() { 
    video.playbackRate = video.playbackRate * .90; 
	console.log("Speed is " + video.playbackRate);
}
//function to speed video that will be used later
function speedVideo() { 
    video.playbackRate = video.playbackRate * 1.10; 
	console.log("Speed is " + video.playbackRate)
}
//function to skip video that will be used later
function skipAhead() {
	console.log("Video current time is " + video.currentTime);
	video = document.getElementById("player1");
	video.currentTime += 10; 
	if(video.currentTime >= video.duration){
		video.currentTime = 0; 
	}
}


window.addEventListener("load", function() {
	console.log("Good job opening the window.");
	var vid = document.querySelector("#player1")
	vid.autoplay = false;
	vid.loop = false; 
	console.log("Auto play is set to " + vid.autoplay);
	console.log("Loop is set to " + vid.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	playVideo();
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	pauseVideo();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	slowVideo();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	speedVideo();
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	skipAhead();
});

var mute = false; 
document.querySelector("#mute").addEventListener("click", function() {
	mute = !mute;
	if(mute){
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}else{
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
	
});

document.querySelector("#slider").addEventListener("change", function(value) {
	var newVolume = document.querySelector("#slider").value;
	document.getElementById("volume").innerHTML = newVolume + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").className = "video oldSchool";
	
});


document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").className = "video";
});
