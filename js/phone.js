
const phoneBtn = document.querySelector(".pho-btn-square");

phoneBtn.onclick = function(event){

	if (document.getElementById('doc')) {
		document.getElementById("1").src = "../PerfectDayReminders/img/docrem.svg";
		document.getElementById("2").src = "../PerfectDayReminders/img/confirm.svg";
		document.getElementById("3").src = "../PerfectDayReminders/img/confirmreminder.svg";
	} else if (document.getElementById('fit')) {
		document.getElementById("1").src = "../PerfectDayReminders/img/drplechas.jpg";
		document.getElementById("2").src = "../PerfectDayReminders/img/confirm.svg";
		document.getElementById("3").src = "../PerfectDayReminders/img/confirmreminder.svg";
	} else if (document.getElementById('house')) {
		document.getElementById("1").src = "../PerfectDayReminders/img/docrem.svg";
		document.getElementById("2").src = "../PerfectDayReminders/img/confirm.svg";
		document.getElementById("3").src = "../PerfectDayReminders/img/confirmreminder.svg";
	} else if (document.getElementById('spa')) {
		document.getElementById("1").src = "../PerfectDayReminders/img/docrem.svg";
		document.getElementById("2").src = "../PerfectDayReminders/img/confirm.svg";
		document.getElementById("3").src = "../PerfectDayReminders/img/confirmreminder.svg";
	} else {
		false
	}
};








