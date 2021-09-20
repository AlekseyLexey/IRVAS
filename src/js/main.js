import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/form';
import changeUserState from './modules/changeUserState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	let userState = {};

	changeUserState(userState);
	modals(userState);
	tabs('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
	tabs('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons_img', '.balcon_icons', '.big_img > img', 'do_image_more', 'inline-block');
	form(userState);
	timer('#timer' ,'2021-12-31');
	images();
});
