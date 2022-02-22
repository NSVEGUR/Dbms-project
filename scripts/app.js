import './splash.js';
import './date.js';
import { Dock } from './dock.js';
import { Menu } from './menu.js';
import { ContextMenu } from './context.js';

class App {
	constructor() {
		this.dock = new Dock();
		this.menu = new Menu();
		this.contextMenu = new ContextMenu();
	}
}

new App();
