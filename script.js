function display(val) {
	document.getElementById("result").value += val;
}

function clearr() {
	document.getElementById("result").value = "";
}

function solve() {
	var x = document.getElementById("result").value;
	var y = eval(x);
	document.getElementById("result").value = y;
}