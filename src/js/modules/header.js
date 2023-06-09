import $ from 'jquery';

export function toggleMenu() {
	$(window).on('load', () => {
		let btnMenu = $('#header__menu-button');
		let listMenu = $('#header__list');

		btnMenu.on('click', () => {
			btnMenu.toggleClass('header__menu-button--disabled');
			btnMenu.toggleClass('header__menu-button--enabled');
			listMenu.toggleClass('header__list--show');
		});
	});
}