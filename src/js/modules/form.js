import validationModule from "./validationModule";

const form = (state) => {
	const forms									= document.querySelectorAll('form');

	validationModule('[name="user_phone"]');

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		postData(item);
	});

	const processingPostData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage				= document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const formData						= new FormData(form);
			if (form.getAttribute('data-calc') === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			processingPostData('assets/server.php', formData)
				.then(data => {
					console.log(data);
					statusMessage.textContent = message.success;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
				form.reset();
				setTimeout(() => {
					statusMessage.remove();
				}, 5000);
			});
		});
	}
};

export default form;