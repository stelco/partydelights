var i = 0; 			// Start Point
var images = [];	// Images Array
var title = [];	    // Titles Array
var url = [];	    // Titles Array
var time = 3000;	// Time Between Switch
var width = 200;
var height = 100;
	 
// Image List
images[0] = "img/party1.jpg";
images[1] = "img/party2.jpg";
images[2] = "img/party3.jpg";

// Title List
title[0] = "Party 1";
title[1] = "Party 2";
title[2] = "Party 3";

// URL List
url[0] = "slide1.html";
url[1] = "slide2.html";
url[2] = "slide3.html";

document.slide.style.width = String(width + "px");
document.slide.style.height = String(height + "px");

// Change Image
function changeSlide(){

    document.slide.src = images[i];

    var titles = document.title = title[i];
    document.getElementById("title").innerHTML = titles;

    var urls = document.url = url[i];
    document.getElementById("url").href = urls;

	// Check If Index Is Under Max
	if(i < images.length - 1){
    console.log(images.length)
	  // Add 1 to Index
	  i++; 
	} else {
    i = 0;
  }

	// Run function every x seconds
	setTimeout("changeSlide()", time);
}

// Run function when page loads
window.onload=changeSlide;