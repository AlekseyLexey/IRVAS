const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger			= document.querySelector(triggerSelector),
				modals			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector);

		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}
		})
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
}

export default modals;