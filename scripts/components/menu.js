import { ActionBar } from './actionbar.js';
import { Helper } from '../utils/helper.js';


const menuIcons = document.querySelectorAll('.menu-icons');
const actionButton = document.getElementById('action-button');
const helper = new Helper();

export class Menu {
	constructor() {
		this.manageMain();
		this.actionBar = new ActionBar();
	}
	manageMain() {
		menuIcons.forEach(icon => {
			icon.addEventListener('click', (e) => {
				helper.resetMenu();
				icon.classList.add('links-hover');
				icon.querySelector('.menu-drop').style.display = 'block';
				helper.addHoverListeners();
			});
		});

		actionButton.addEventListener('click', (e) => {
			document.querySelector('.action-drop').style.display = 'flex';
		});

		window.addEventListener('mouseup', (e) => {
			menuIcons.forEach((icon) => {
				if (e.target != icon && e.target.parentNode != icon) {
					helper.resetMenu();
					helper.removeHoverListeners();
				}
			});
		});
	}
}

