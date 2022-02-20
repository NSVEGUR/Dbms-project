const menuIcons = document.querySelectorAll('.menu-icons');

class Helper {
	resetMenu() {
		menuIcons.forEach(icon => {
			icon.style.background = 'none';
			icon.querySelector('.menu-drop').style.display = 'none';
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
		e.target.style.background = 'rgba(146, 146, 146, 0.3)';
		e.target.querySelector('.menu-drop').style.display = 'block';
	}
}