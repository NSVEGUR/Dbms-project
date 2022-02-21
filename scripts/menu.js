let members = [];

const actionButton = document.getElementById('action-button');
const themeButton = document.querySelector('.action-mode');
const notchButton = document.querySelector('.action-notch');
const focusButton = document.querySelector('.action-focus');
const themeGlyph = document.querySelector('.mode-glyph');
const focusGlyph = document.querySelector('.focus-glyph');
const notchGlyph = document.querySelector('.notch-glyph');
const notch = document.querySelector('.notch');
const focuS = document.getElementById('focus');
const main = document.querySelector('main');
const wallpaperButtonContainer = document.querySelector('.action-wall');
const wallpaperButtonText = document.querySelector('.action-wallpaper > div > h4');
const dbOSLinks = document.querySelectorAll('.menu-icon-1 > .menu-drop > .drop-link');
const databaseLinks = document.querySelectorAll('.menu-icon-2 > .menu-drop > .drop-link');
const mySqlLinks = document.querySelectorAll('.menu-icon-3 > .menu-drop > .drop-link');
const helpLinks = document.querySelectorAll('.menu-icon-9 > .menu-drop > .drop-link');


class ManageMenu {
	constructor() {
		for (let i = 4; i <= 8; i++) {
			members.push(document.querySelectorAll(`.menu-icon-${i} > .menu-drop > .drop-link`));
		}
		this.manageMain();
		this.manageActionBar = new ManageActionBar();
		// this.manageSub();
		this.helper = new Helper();
	}
	manageMain() {
		menuIcons.forEach(icon => {
			icon.addEventListener('click', (e) => {
				this.helper.resetMenu();
				icon.classList.add('links-hover');
				icon.querySelector('.menu-drop').style.display = 'block';
				this.helper.addHoverListeners();
			});
		});

		actionButton.addEventListener('click', (e) => {
			document.querySelector('.action-drop').style.display = 'flex';
		});

		window.addEventListener('mouseup', (e) => {
			menuIcons.forEach((icon) => {
				if (e.target != icon && e.target.parentNode != icon) {
					this.helper.resetMenu();
					this.helper.removeHoverListeners();
				}
			});
		});
	}
	manageSub() {
		this.manageDbOS();
		this.manageDatabase();
		this.manageMySql();
		this.manageMembers();
		this.manageHelp();
	}
	manageDbOS() {
		dbOSLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About dbOS', 1);
				}
			})
		});
	}
	manageDatabase() {
		databaseLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About Database', 1);
				}
			})
		});
	}
	manageMySql() {
		mySqlLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About MySql', 1);
				}
			})
		});
	}
	manageMembers() {
		members.forEach(member => {
			member.forEach((link) => {
				link.addEventListener('click', (e) => {
					if (link.dataset.open === 'about') {
						new NewWinBox('member', 1);
					}
				})
			});
		});
	}
	manageHelp() {
		helpLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('Help dbOS', 1);
				}
			})
		});
	}
}

class ManageActionBar {
	constructor() {
		this.dark = true;
		this.notch = false;
		this.focus = false;
		this.manageTheme();
		this.manageNotch();
		this.manageFocus();
	}
	manageTheme() {
		themeButton.addEventListener('click', (e) => {
			if (this.dark) {
				main.style.backgroundImage = 'url("./../assets/light-mac-bg.jpeg")';
				wallpaperButtonContainer.style.backgroundImage = `url('./../assets/light-mac-bg.jpeg')`;
				wallpaperButtonText.textContent = 'Dynamic Light Wallpaper';
				themeGlyph.style.background = '#3273ecf3';
			}
			else {
				main.style.backgroundImage = 'url("./../assets/dark-mac-bg.jpeg")';
				wallpaperButtonContainer.style.backgroundImage = `url('./../assets/dark-mac-bg.jpeg')`;
				wallpaperButtonText.textContent = 'Dynamic Dark Wallpaper';
				themeGlyph.style.background = 'var(--system-transparent-color-primary-op)';
			};
			document.body.classList.toggle('light-theme');
			themeGlyph.classList.toggle('system-color');
			this.dark = !this.dark;
		});
	}
	manageNotch() {
		notchButton.addEventListener('click', (e) => {
			notch.classList.toggle('toggle-notch');
			if (this.notch) notchGlyph.style.background = 'var(--system-transparent-color-primary-op)';
			else notchGlyph.style.background = '#3273ecf3';
			this.notch = !this.notch;
		});
	}
	manageFocus() {
		focusButton.addEventListener('click', (e) => {
			if (this.focus) {
				focusGlyph.style.background = 'var(--system-transparent-color-primary-op)';
				focuS.style.display = 'none';
			}
			else {
				focusGlyph.style.background = '#3273ecf3';
				focuS.style.display = 'block';
			}
			this.focus = !this.focus;
		});
	}
}

class NewWinBox {
	constructor(title = 'dbOS', i = 0) {
		new WinBox(title, {
			x: 50 + 50 * i,
			y: 50 + 5 * i,
			top: 40,
			right: 10,
			bottom: 40,
			left: 10,
			width: '60%',
			height: '75%',
			onfocus: function () {
				this.setBackground("#121212bF");
				dockIcons.forEach((i) => {
					i.classList.remove('active');
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.add('active');
					}
				});
			},
			onblur: function () {
				this.setBackground("#1212125F");
				this.body.style.background = "#1212125F";
			},
			onclose: function () {
				dockIcons.forEach((i) => {
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.remove('active');
					}
				});
			}
		});
	}
}

