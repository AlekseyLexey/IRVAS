import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";
	modals();
	tabs('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
	tabs('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
	form();
});
