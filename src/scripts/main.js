import './winbox.bundle.js';
import './../styles/style.css';

const icons = document.querySelectorAll('.icon > div');
icons.forEach((icon, i) => {
	icon.addEventListener('click', (e) => {
		new WinBox(icon.querySelector('span').innerHTML.toString(), {
			top: 50 + 5 * i,
			right: 50,
			bottom: 150,
			left: 50 + 50 * i,
			onfocus: function () {
				this.setBackground("#121212bF");
			},
			onblur: function () {
				this.setBackground("#1212125F");
				this.body.style.background = "#1212125F";
			},
		});
		icons.forEach((icon) => {
			icon.classList.remove('active');
		});
		icon.classList.add('active');
	});
});

new WinBox(document.querySelector('.icon > div > span').innerHTML.toString(), {
	top: 50,
	right: 50,
	bottom: 150,
	left: 40,
	onfocus: function () {
		this.setBackground("#121212bF");
	},
	onblur: function () {
		this.setBackground("#1212125F");
		this.body.style.background = "#1212125F";
	},
})


