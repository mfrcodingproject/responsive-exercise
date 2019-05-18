function toggleMenu() {
	var x = document.getElementById("main-menu");
  	if (x.className === "main-menu") {
    	x.className += " responsive";
  	} else {
    	x.className = "main-menu";
  	}
}