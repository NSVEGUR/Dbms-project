const dockIcons = document.querySelectorAll('.icon > div');
const dockTitles = [
	'Database',
	'MySql',
	'Harsha',
	'Praveen',
	'Ravindar',
	'Vineeth',
	'Nagasai',
];

class Window {
	constructor(title = 'DbOS', i = -1) {
		this.title = title;
		this.i = i;
		this.isOpen = false;
		this.window = null;
	}
	open() {
		this.isOpen = true;
		this.window = new WinBox(this.title, {
			x: 50 + 75 * this.i,
			y: 50 + 25 * this.i,
			top: 40,
			right: 10,
			bottom: 120,
			left: 10,
			width: '60%',
			height: '75%',
			onfocus: function () {
				this.setBackground("#121212");
				dockIcons.forEach((i) => {
					i.classList.remove('active');
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.add('active');
					}
				});
			},
			onblur: function () {
				this.setBackground("#121212aF");
				this.body.style.background = "#121212aF";
			},
			onclose: () => {
				this.isOpen = false;
				dockIcons.forEach((i) => {
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.remove('active');
					}
				});
			}
		});
	}
	close() {
		if (this.isOpen) {
			this.window.close();
			this.isOpen = false;
		}
	}
	focus() {
		this.window.focus();
	}
}

const dbOS = new Window();
const dockWindows = dockTitles.map((title, i) => new Window(title, i));