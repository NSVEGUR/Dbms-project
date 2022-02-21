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

let textColor = 'white';
let focusWindowColor = '#1a1a1d';
let blurWindowColor = '#1a1a1daf';

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
				this.setBackground(focusWindowColor);
				this.body.style.background = focusWindowColor;
			},
			onblur: function () {
				this.setBackground(blurWindowColor);
				this.body.style.background = blurWindowColor;
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