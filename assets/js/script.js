function dateToday() {
	let day = new Date();
	let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.querySelector('#date').textContent = dayList[day.getDay()];

	let time = new Date();
  	document.querySelector('#time').textContent = time.toLocaleString('en-PH', 
  		{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}
  		);
}

dateToday();