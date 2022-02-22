import './winbox.js';

const dockIcons = document.querySelectorAll('.icon > div');
const dockTitles = [
	'Database',
	'Sql',
	'Harsha',
	'Praveen',
	'Ravindar',
	'Vineeth',
	'Nagasai',
];


export class Window {
	constructor(title = 'DbOS', i = -1) {
		this.title = title;
		this.i = i;
		this.isOpen = false;
		this.window = null;
	}
	open() {
		this.isOpen = true;
		this.window = new WinBox(this.title, {
			class: [
				"no-full",
			],
			x: 50 + 75 * this.i,
			y: 50 + 25 * this.i,
			top: 40,
			right: 10,
			bottom: 120,
			left: 10,
			width: '60%',
			height: '75%',
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

export const dockWindows = dockTitles.map((title, i) => new Window(title, i));