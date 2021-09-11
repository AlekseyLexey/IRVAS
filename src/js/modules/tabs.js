const tabs = (tabSelector, tabsParentSelector, tabsContentSelectoor, activeSelector) => {

	const tabs					= document.querySelectorAll(tabSelector),
			tabsParent			= document.querySelector(tabsParentSelector),
			tabsContent			= document.querySelectorAll(tabsContentSelectoor);

	function hideTabContent() {
		tabsContent.forEach(item => item.style.display = 'none');
		tabs.forEach(item => item.classList.remove(activeSelector));
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add(activeSelector);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		console.log(target);
		if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
			tabs.forEach((item, i) => {
				if (target === item || target.parentNode === item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	})
}

export default tabs;