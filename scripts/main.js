import './winbox.bundle.js';

const icons = document.querySelectorAll('.icon > div');
icons.forEach((icon, i) => {
	icon.addEventListener('click', (e) => {
		new WinBox(icon.querySelector('span').innerHTML.toString(), {
			x: 50 + 50 * i,
			y: 50 + 5 * i,
			top: 40,
			right: 10,
			bottom: 40,
			left: 10,
			onfocus: function () {
				this.setBackground("#121212bF");
				icons.forEach((i) => {
					i.classList.remove('active');
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.add('active');
					}
				});
			},
			onblur: function () {
				this.setBackground("#1212125F");
				this.body.style.background = "#1212125F";
			},
		});
	});
});