const modals = () => {

	function bindModal(triggerSelector, modalSelector, closeSelector, dataWindow = true) {
		const trigger			= document.querySelectorAll(triggerSelector),
				modals			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector),
				windows			= document.querySelectorAll('[data-window]');

		function openModal(modal) {
			modal.style.display = 'block'
			document.body.style.overflow = 'hidden'
		}
	
		function closeModal() {
			closeAllWindows();
			document.body.style.overflow = ''
		}

		function closeAllWindows() {
			windows.forEach(item => {
				item.style.display = 'none'
			});
		}

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				closeAllWindows();
				openModal(modals);
			});
		});

		close.addEventListener('click', () => {
			closeModal();
		});

		modals.addEventListener('click', (e) => {
			if (e.target === modals && dataWindow) {
				closeModal();
			}
		});
	}

	function showModalByTime(modalSelector, timeout) {
		setTimeout(() => {
			document.querySelector(modalSelector).style.display = 'block'
			document.body.style.overflow = 'hidden'
		}, timeout);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 60000);
}

export default modals;