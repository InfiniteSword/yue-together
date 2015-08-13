var pic = document.getElementById('banner');

function startFlash() {
	setTimeout(function() {
		if(pic.style.left == "0%"){
			pic.style.left = "-400%";
		}
		pic.style.left = parseFloat(pic.style.left) + 100 + "%";
		startFlash();
	}, 5000);
}
startFlash();