import './../styles/style.css';

const icons = document.querySelectorAll('.icon > div');
icons.forEach((icon, i) => {
	icon.addEventListener('click', (e) => {
		new WinBox(icon.querySelector('span').innerHTML.toString(), {
			background: "#121212",
			top: 50 + 5 * i,
			right: 50,
			bottom: 150,
			left: 50 + 50 * i,
		});
		icons.forEach((icon) => {
			icon.classList.remove('active');
		});
		icon.classList.add('active');
	});
})


