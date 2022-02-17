import './../styles/style.css';

const dockContainer = `<div class="dock-container">
<button class="icon">
	<div>
		<span>DBMS</span>
		<img class="app-icon" src="assets/icons/dbms.png" />
	</div>
	<div>
		<span>Harsha</span>
		<img class="app-icon" src="assets/icons/harsha.png" />
	</div>
	<div>
		<span>Praveen</span>
		<img class="app-icon" src="assets/icons/praveen.png" />
	</div>
	<div>
		<span>Ravindar</span>
		<img class="app-icon" src="assets/icons/ravindar.png" />
	</div>
	<div>
		<span>Vineeth</span>
		<img class="app-icon" src="assets/icons/vineeth.png" />
	</div>
	<div>
		<span>Nagasai</span>
		<img class="app-icon" src="assets/icons/nagasai.png" />
	</div>
</button>
</div>`;

document.querySelector('#dock').innerHTML = dockContainer;