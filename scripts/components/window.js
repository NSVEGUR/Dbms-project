import '../utils/winbox.js';

const dockIcons = document.querySelectorAll('.icon > div');
const dockTitles = [
	'Database',
	'Sql',
	'Harsha',
	'Praveen',
	'Ravindar',
	'Vineeth',
	'Nagasai',
	'VSCode',
];


export class Window {
	constructor(props) {
		this.title = props.title ?? 'dbOS';
		this.i = props.i ?? -1;
		this.isOpen = false;
		this.window = null;
	}
	open(data) {
		this.isOpen = true;
		this.window = new WinBox(this.title, {
			class: [
				"no-full",
			],
			x: 50 + 60 * this.i,
			y: 50 + 0 * this.i,
			top: 40,
			url: data?.url || '',
			html: data?.html || '',
			mount: data?.mount || '',
			width: '60%',
			height: '85%',
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

export const dockWindows = dockTitles.map((title, i) => new Window({
	title: title,
	i: i,
}));
export const dbOSWindows = [
	new Window({ title: 'about dbOS', i: 2 }),
	new Window({ title: 'dbOS Help', i: 4 }),
];
