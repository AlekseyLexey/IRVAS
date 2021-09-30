const modals = (state) => {

	function bindModal(triggerSelector, modalSelector, closeSelector, dataWindow = true) {
		const trigger			= document.querySelectorAll(triggerSelector),
				modals			= document.querySelector(modalSelector),
				close				= document.querySelector(closeSelector),
				windows			= document.querySelectorAll('[data-window]'),
				scroll			= window.innerWidth - document.body.clientWidth;

		function openModal(modal) {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scroll}px`;
		}
	
		function closeModal() {
			modals.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}

		function closeAllWindows() {
			windows.forEach(item => {
				item.style.display = 'none';
			});
		}

		function removeClick(item) {
			item.removeEventListener();
		}
		
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				if (item.classList.contains('popup_calc_button')) {
					if (Object.keys(state).length < 3) {
						removeClick(item);
					}
				}

				if (item.classList.contains('popup_calc_profile_button')) {
					if (Object.keys(state).length < 5) {
						removeClick(item);
					}
				}
				closeAllWindows();
				openModal(modals);
			});
		});

		close.addEventListener('click', closeModal);

		modals.addEventListener('click', (e) => {
			if (e.target === modals && dataWindow) {
				closeAllWindows();
				closeModal();
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			 document.querySelector(selector).style.display = 'block';
			 document.body.style.overflow = 'hidden';
		}, time);
  }

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 3000);
};

export default modals;