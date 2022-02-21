const menuIcons = document.querySelectorAll('.menu-icons');

class Helper {
	constructor() {
		const links = document.querySelectorAll('a');
		links.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
			})
		});
	}
	resetMenu() {
		menuIcons.forEach(icon => {
			icon.classList.remove('links-hover');
			icon.querySelector('.menu-drop').style.display = 'none';
			document.querySelector('.action-drop').style.display = 'none';
		});
	}
	addHoverListeners = () => {
		menuIcons.forEach(icon => {
			icon.addEventListener('mouseenter', this.showMenuDrop);
		});
	}
	removeHoverListeners = () => {
		menuIcons.forEach(icon => {
			icon.removeEventListener('mouseenter', this.showMenuDrop);
		});
	}
	showMenuDrop = (e) => {
		this.resetMenu();
		e.target.classList.add('links-hover');
		e.target.querySelector('.menu-drop').style.display = 'block';
	}
}