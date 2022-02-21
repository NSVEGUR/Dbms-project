class Dock {
	constructor() {
		dockIcons.forEach((icon, i) => {
			icon.addEventListener('click', (e) => {
				const index = e.target.dataset.icon;
				if (index == 7) return window.open("https://github.com/NSVEGUR/dbOS-web", '_blank');
				if (!dockWindows[index].isOpen) {
					dockWindows[index].open();
					icon.classList.add('active');
				} else {
					dockWindows[index].focus();
				}
			});
		});
	}
}
