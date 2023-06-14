"use strict"

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}