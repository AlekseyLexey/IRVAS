const validationModule = (selector) => {
	const itemValidation = document.querySelectorAll(selector);

	itemValidation.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
	
};

export default validationModule;