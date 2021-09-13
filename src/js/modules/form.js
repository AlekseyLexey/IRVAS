const form = () => {
	const forms									= document.querySelectorAll('form');

	let message = {
		loading: 'Loading...',
		sucsess: 'Done',
		failure: 'Ohhh... We are fuck'
	}

	forms.forEach(item => {
		postData(item)
	});

	const processingPostData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		})

		return await res.text();
	}

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage				= document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const formData						= new FormData(form);

			processingPostData('assets/server.php', formData)
				.then(data => {
					console.log(data);
					statusMessage.textContent = message.sucsess;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
				form.reset()
				setTimeout(() => {
					statusMessage.remove();
				}, 5000)
			})
		})
	}
}

export default form;