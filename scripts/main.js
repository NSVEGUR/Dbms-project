import './winbox.js';
import './desktop.js';

const dockIcons = document.querySelectorAll('.icon > div');
const menuIcons = document.querySelectorAll('.content > ul > li > a');
dockIcons.forEach((icon, i) => {
	icon.addEventListener('click', (e) => {
		new WinBox(icon.querySelector('span').innerHTML.toString(), {
			x: 50 + 50 * i,
			y: 50 + 5 * i,
			top: 40,
			right: 10,
			bottom: 40,
			left: 10,
			width: '60%',
			height: '75%',
			onfocus: function () {
				this.setBackground("#121212bF");
				dockIcons.forEach((i) => {
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
			onclose: function () {
				dockIcons.forEach((i) => {
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.remove('active');
					}
				});
			}
		});
	});
});
menuIcons.forEach((icon, i) => {
	icon.addEventListener('click', (e) => {
		new WinBox(icon.innerHTML.toString(), {
			x: 50 + 50 * i,
			y: 50 + 5 * i,
			top: 40,
			right: 10,
			bottom: 40,
			left: 10,
			width: '60%',
			height: '75%',
			onfocus: function () {
				this.setBackground("#121212bF");
				dockIcons.forEach((i) => {
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
			onclose: function () {
				dockIcons.forEach((i) => {
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.remove('active');
					}
				});
			}
		});
	});
})