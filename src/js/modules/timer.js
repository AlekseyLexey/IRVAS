const timer = (id ,deadLine) => {

	const getTimeRemaning = (endTime) => {

		const timeLeft			= Date.parse(endTime) - Date.parse(new Date()),
				days				= Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
				hours				= Math.floor(timeLeft / (1000 * 60 * 60) % 24),
				minutes			= Math.floor(timeLeft / (1000 * 60) % 60),
				seconds			= Math.floor(timeLeft / 1000 % 60);

		return {
			'timeLeft': timeLeft,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setTimeRemaning (selector, lastDay) {
		const timer				= document.querySelector(selector),
				days				= timer.querySelector('#days'),
				hours				= timer.querySelector('#hours'),
				minutes			= timer.querySelector('#minutes'),
				seconds			= timer.querySelector('#seconds'),
				updateTimer		= setInterval(changeClock, 1000);

		changeClock();

		function setZeroInTimer(numb) {
			if (numb < 10 && numb >= 0) {
				return `0` + numb;
			} else {
				return numb;
			}
		}

		function changeClock () {
			const timer			= getTimeRemaning(lastDay);
			if (timer.timeLeft > 0) {
				if (timer.timeLeft <= 0) {
					clearInterval(updateTimer);
				}
				days.innerHTML		= setZeroInTimer(timer.days);
				hours.innerHTML	= setZeroInTimer(timer.hours);
				minutes.innerHTML	= setZeroInTimer(timer.minutes);
				seconds.innerHTML	= setZeroInTimer(timer.seconds);
			}
		}
	}

	setTimeRemaning(id, deadLine);
};

export default timer;