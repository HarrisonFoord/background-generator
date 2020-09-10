var css = document.querySelector("h3");
var colorOne = document.getElementById("color1");
var colorTwo = document.getElementById("color2");
var bakgrund = document.getElementById("gradient");

colorChange();

colorOne.addEventListener("input", colorChange);
colorTwo.addEventListener("input", colorChange);

function colorChange(){
	bakgrund.style.background = "linear-gradient(to right, "
	+ colorOne.value
	+ ", " 
	+ colorTwo.value
	+ ")";
	css.innerHTML = (colorOne.value + "," + colorTwo.value);
}

css.innerHTML = (colorOne.value + "," + colorTwo.value);
console.log(colorOne.value + colorTwo.value);