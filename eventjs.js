var shoot = document.getElementById("shutter");

shoot. addEventListener ("click", takePhoto);
shoot. addEventListener("mouseup", finishPhoto);

function takePhoto (){
	shoot.classList.add("screenshot");

}
function finishPhoto(){
	setTimeout(function(){
		shoot.classList.remove("screenshot");
	},100);

}
