var btn = document.getElementById("btn");
var light = document.getElementById("light");
var eight = document.getElementById("eight");

function toggleBtn() {
	btn.classList.toggle("active");
	light.classList.toggle("on");
	eight.classList.toggle("animate");
}
