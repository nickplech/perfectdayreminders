
const medical = document.getElementById('doc-btn');
const fitness = document.getElementById('fit');
const realEstate = document.getElementById('house');
const spa = document.getElementById('spa');

medical.onclick = () => {
	document.getElementById('1').src = "img/docrem.png";
	document.getElementById('2').src = "img/confirm.png";
	document.getElementById('3').src = "img/confirmrem.png";
}

fitness.onclick = () => {
	document.getElementById('1').src = "img/docrem.png";
	document.getElementById('2').src = "img/docrem.png";
	document.getElementById('3').src = "img/docrem.png";
}

realEstate.onclick = () => {
	document.getElementById('1').src = "img/realty-reminder.png";
	document.getElementById('2').src = "img/confirm.png";
	document.getElementById('3').src = "img/realty-confirmed.png";
}

spa.onclick = () => {
	document.getElementById('1').src = "img/sparem.png";
	document.getElementById('2').src = "img/cancel.svg";
	document.getElementById('3').src = "img/docrem.png";
}



