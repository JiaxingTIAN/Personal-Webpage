
function pop(div) {
	 document.getElementById(div).style.display = 'block';
}
function hide(div) {
    document.getElementById(div).style.display = 'none';
}

function myFunc() {
    var factor = [1000, 1, 0.01, 0.001];
    var inIdx = document.getElementById("inputUnit").selectedIndex;
    var outIdx = document.getElementById("outputUnit").selectedIndex;
    var input = parseInt(document.getElementById("Text1").value);
    var output = input / factor[inIdx] * factor[outIdx];

    document.getElementById("Text2").value = "" + output;
    document.getElementById("Text1").value = "";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        hide('popDiv');
    }
};
