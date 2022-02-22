import './date.js';
import './splash.js';

class App {
	constructor() {
		this.dock = new Dock();
		this.menu = new Menu();
		this.contextMenu = new ContextMenu();
	}
}

new App();
