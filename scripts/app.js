import './utils/splash.js';
import { Login } from './utils/login.js';
import { Dock } from './components/dock.js';
import { Menu } from './components/menu.js';
import { ContextMenu } from './components/context.js';

class App {
	constructor() {
		this.login = new Login();
		this.dock = new Dock();
		this.menu = new Menu();
		this.contextMenu = new ContextMenu();
	}
}

new App();
