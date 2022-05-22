// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper, { Navigation } from 'swiper';


document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		modules: [Navigation],
		slidesPerView:1.5,
		loop: true,
		spaceBetween: 149,
		centeredSlides: true, 
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });

})
