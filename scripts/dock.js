class Dock {
	constructor() {
		dockIcons.forEach((icon, i) => {
			icon.addEventListener('click', (e) => {
				const index = e.target.dataset.icon;
				console.log(dockWindows[index])
				if (!dockWindows[index].isOpen) {
					dockWindows[index].open();
				} else {
					dockWindows[index].focus();
				}
			});
		});
	}
}
