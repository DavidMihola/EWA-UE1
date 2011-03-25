window.addEventListener("load", function () {
	var opt = window.location.search.substr(1,window.location.search.length);
	var arr = opt.split("&");
	var config = {
		"opacity"  : 0.5,
		"z-index"  : 10,
		"left"     : "auto",
		"right"    : "auto",
		"position" : "absolute",
		"top"      : "10px",
		"file"     : "table_cropped.png"
	}

	for (var s = 0; s < arr.length; s++) {
		var val = arr[s].split("=");
		config[val[0]] = val[1];
	}

	div = document.createElement("div");
	div.setAttribute("class", "overlay");

	img = document.createElement("img");
	img.setAttribute("src", config["file"]);

	div.appendChild(img);

	var css = document.createElement("style");
	css.setAttribute("type", "text/css");
	css.innerHTML = "div.overlay { ";
	for (param in config) {
		if (param !== "file") {
			css.innerHTML += param + ": " + config[param] + "; ";
		}
	}
	css.innerHTML += " }";

	document.getElementsByTagName("head")[0].appendChild(css);
	document.body.appendChild(div);
}, false);
