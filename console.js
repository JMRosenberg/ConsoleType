var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel venenatis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pulvinar vestibulum dictum. Praesent faucibus volutpat rhoncus. Morbi at eros nisi. Aenean augue nunc, consectetur sed eros iaculis, ultrices vulputate dolor. Nunc vitae adipiscing dolor. Fusce mauris ante, fermentum et leo vitae, sollicitudin mollis felis. Etiam fringilla arcu sed fermentum accumsan. Proin aliquam nisi vel euismod faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel venenatis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pulvinar vestibulum dictum. Praesent faucibus volutpat rhoncus. Morbi at eros nisi. Aenean augue nunc, consectetur sed eros iaculis, ultrices vulputate dolor. Nunc vitae adipiscing dolor. Fusce mauris ante, fermentum et leo vitae, sollicitudin mollis felis. Etiam fringilla arcu sed fermentum accumsan. Proin aliquam nisi vel euismod faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel venenatis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pulvinar vestibulum dictum. Praesent faucibus volutpat rhoncus. Morbi at eros nisi. Aenean augue nunc, consectetur sed eros iaculis, ultrices vulputate dolor. Nunc vitae adipiscing dolor. Fusce mauris ante, fermentum et leo vitae, sollicitudin mollis felis. Etiam fringilla arcu sed fermentum accumsan. Proin aliquam nisi vel euismod faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel venenatis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pulvinar vestibulum dictum. Praesent faucibus volutpat rhoncus. Morbi at eros nisi. Aenean augue nunc, consectetur sed eros iaculis, ultrices vulputate dolor. Nunc vitae adipiscing dolor. Fusce mauris ante, fermentum et leo vitae, sollicitudin mollis felis. Etiam fringilla arcu sed fermentum accumsan. Proin aliquam nisi vel euismod faucibus.";


var box = document.getElementById("text");
var index = 0;

function type() {
    box = document.getElementById("text");
    myInt = setInterval(newLetter, 100);
}

function newLetter() {
    clearInterval(myInt);
    if(text[index] != undefined) {
	var myTime = Math.random() * 200;
	if(text[index] == " ") {
	    myTime = 0;
	}
	else if(text[index] == ",") {
	    myTime = 600;
	}
	else if(text[index] == ".") {
	    myTime = 1000;
	}
	if(Math.random() < 0.92) {
	    box.innerHTML += text[index];
	    index++;
	}
	else {
	    if(index > 0) {
		box.innerHTML = box.innerHTML.substr(0,box.innerHTML.length-1);
		index--;
		myTime = 600;
	    }
	}
	myInt = setInterval(newLetter, myTime);
    }
    else {
	clearInterval(myInt);
    }
}
