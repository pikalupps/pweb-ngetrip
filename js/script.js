let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.select');
	const caret = dropdown.querySelector('.caret');
	const menu = dropdown.querySelector('.menu');
	const options = dropdown.querySelector('.menu li');
	const selected = dropdown.querySelector('.selected');

	select.addEventListener('click', () => {
		select.classList.toggle('select-clicked');
		caret.classList.toggle('caret-rotate');
		menu.classList.toggle('menu-open');
	});

	options.forEach(option => {
		option.addEventListener('click', () =>{
			selected.innerText = option.innerText;

			select.classList.remove('select-clicked');
			caret.classList.remove('caret-rotate');
			menu.classList.remove('menu-open');

			options.forEach(option => {
				option.classList.add('active');
			})
		})
	})
})