import validationModule from "./validationModule";

const changeUserState = (state) => {
	const windowForm			= document.querySelectorAll('.balcon_icons_img'),
			windowWidth			= document.querySelectorAll('#width'),
			windowHeight		= document.querySelectorAll('#height'),
			windowType			= document.querySelectorAll('#view_type'),
			windowSeason		= document.querySelectorAll('.checkbox');

	validationModule('#width');
	validationModule('#height');

	function addUserState(elem, event, nameKey) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch(item.tagName) {
					case 'SPAN':
						state[nameKey] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[nameKey] = 'Холодное' : state[nameKey] = 'Теплое';
							elem.forEach((season, j) => {
								season.checked = false;
								if (i == j) {
									season.checked = true;
								}
							});
						} else {
							state[nameKey] = item.value;
						}
						break;
					case 'SELECT':
						state[nameKey] = item.value;
						break;
				}
				console.log(state);
				// console.log(Object.keys(state).length);
			});
		});
	}

	addUserState(windowForm, 'click', 'form');
	addUserState(windowWidth, 'input', 'width');
	addUserState(windowHeight, 'input', 'height');
	addUserState(windowType, 'change', 'type');
	addUserState(windowSeason, 'change', 'season');
}

export default changeUserState;