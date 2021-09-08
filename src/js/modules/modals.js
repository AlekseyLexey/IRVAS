const modals = () => {

	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger			= document.querySelectorAll(triggerSelector),
				modals			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector);

		function openModal(modal) {
			modal.style.display = 'block'
			document.body.style.overflow = 'hidden'
		}
	
		function closeModal(modal) {
			modal.style.display = 'none'
			document.body.style.overflow = ''
		}

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				openModal(modals);
			})
		})

		close.addEventListener('click', () => {
			closeModal(modals);
		})

		modals.addEventListener('click', (e) => {
			if (e.target === modals) {
				closeModal(modals);
			}
		})
	}

	function showModalByTime(modalSelector, timeout) {
		setTimeout(() => {
			document.querySelector(modalSelector).style.display = 'block'
			document.body.style.overflow = 'hidden'
		}, timeout)
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	// showModalByTime('.popup', 60000);
}

export default modals;