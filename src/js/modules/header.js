import $ from 'jquery';

export function toggleMenu() {
	console.log(1);

	$(window).on('load', () => {
		console.log(2);

		let btnMenu = $('#header__menu-button');
		let listMenu = $('#header__list');

		btnMenu.on('click', () => {
			console.log(3);
			btnMenu.toggleClass('header__menu-button--disabled');
			btnMenu.toggleClass('header__menu-button--enabled');
			listMenu.toggleClass('header__list--show');
		});
	});
}