const images = () => {

	const imagesParent			= document.querySelector('.works'),
			imagesBlock				= document.createElement('div'),
			imageWindow				= document.createElement('img');

	imagesBlock.classList.add('popup');
	imagesParent.appendChild(imagesBlock);
	imagesBlock.appendChild(imageWindow);
	imagesBlock.style.cssText = `
		justify-content: center;
		align-items: center;
	`;
	imagesBlock.style.display = 'none';


	imagesParent.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target && target.classList.contains('preview')) {
			imagesBlock.style.display = 'flex';
			const attributeETarget = target.parentNode.getAttribute('href');
			imageWindow.setAttribute('src', attributeETarget);
		}
		if (target && target.matches('div.popup')) {
			imagesBlock.style.display = 'none';
		}
	});


};

export default images;