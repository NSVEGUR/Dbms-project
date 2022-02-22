let members = [];

const dbOSLinks = document.querySelectorAll('.menu-icon-1 > .menu-drop > .drop-link');
const databaseLinks = document.querySelectorAll('.menu-icon-2 > .menu-drop > .drop-link');
const mySqlLinks = document.querySelectorAll('.menu-icon-3 > .menu-drop > .drop-link');
const helpLinks = document.querySelectorAll('.menu-icon-9 > .menu-drop > .drop-link');


class Menu {
	constructor() {
		for (let i = 4; i <= 8; i++) {
			members.push(document.querySelectorAll(`.menu-icon-${i} > .menu-drop > .drop-link`));
		}
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
	// manageSub() {
	// 	this.manageDbOS();
	// 	this.manageDatabase();
	// 	this.manageMySql();
	// 	this.manageMembers();
	// 	this.manageHelp();
	// }
	// manageDbOS() {
	// 	dbOSLinks.forEach((link) => {
	// 		link.addEventListener('click', (e) => {
	// 			if (link.dataset.open === 'about') {
	// 				new NewWinBox('About dbOS', 1);
	// 			}
	// 		})
	// 	});
	// }
	// manageDatabase() {
	// 	databaseLinks.forEach((link) => {
	// 		link.addEventListener('click', (e) => {
	// 			if (link.dataset.open === 'about') {
	// 				new NewWinBox('About Database', 1);
	// 			}
	// 		})
	// 	});
	// }
	// manageMySql() {
	// 	mySqlLinks.forEach((link) => {
	// 		link.addEventListener('click', (e) => {
	// 			if (link.dataset.open === 'about') {
	// 				new NewWinBox('About Sql', 1);
	// 			}
	// 		})
	// 	});
	// }
	// manageMembers() {
	// 	members.forEach(member => {
	// 		member.forEach((link) => {
	// 			link.addEventListener('click', (e) => {
	// 				if (link.dataset.open === 'about') {
	// 					new NewWinBox('member', 1);
	// 				}
	// 			})
	// 		});
	// 	});
	// }
	// manageHelp() {
	// 	helpLinks.forEach((link) => {
	// 		link.addEventListener('click', (e) => {
	// 			if (link.dataset.open === 'about') {
	// 				new NewWinBox('Help dbOS', 1);
	// 			}
	// 		})
	// 	});
	// }
}

