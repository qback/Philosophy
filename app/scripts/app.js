import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {

	const $nav = $('#nav');
	const $header = $('#header');
	const $toggleNav = $('#toggleNav');
	const $toggleNavReverse = $('#toggleNavReverse');

	$toggleNav.on('click', function (event) {
		event.preventDefault();
		$nav.removeClass('nav_hidden');
		$header.addClass('header_blur');
		this.hide();
	});

	$toggleNavReverse.on('click', function (event) {
		event.preventDefault();
		$nav.addClass('nav_hidden');
		$header.removeClass('header_blur');
		$toggleNav.show();
		this.hide();
	});

	svg4everybody();

});

