const menuIcons = document.querySelectorAll('.menu-icons');
const main = document.querySelector('main');
const wallpaperButtonContainer = document.querySelector('.action-wall');
const wallpaperButtonText = document.querySelector('.action-wallpaper > div > h4');
const themeGlyph = document.querySelector('.mode-glyph');

export class Helper {
	constructor() {
		this.dark = true;
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
	switchTheme = (e) => {
		if (this.dark) {
			main.style.backgroundImage = 'url("./../assets/light-mac-bg.jpeg")';
			wallpaperButtonContainer.style.backgroundImage = `url('./../assets/light-mac-bg.jpeg')`;
			wallpaperButtonText.textContent = 'Dynamic Light Wallpaper';
			themeGlyph.style.background = 'var(--system-transparent-color-primary-op)';
		}
		else {
			main.style.backgroundImage = 'url("./../assets/dark-mac-bg.jpeg")';
			wallpaperButtonContainer.style.backgroundImage = `url('./../assets/dark-mac-bg.jpeg')`;
			wallpaperButtonText.textContent = 'Dynamic Dark Wallpaper';
			themeGlyph.style.background = 'var(--system-color)';
		};
		document.body.classList.toggle('light-theme');
		themeGlyph.classList.toggle('system-color');
		this.dark = !this.dark;
	}
}