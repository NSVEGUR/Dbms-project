import './date.js';


const cancel = document.querySelector('.cancel > div');
const touchId = document.querySelector('.touch-id');
const password = document.querySelector('.password');
const passwordClue = document.querySelector('.password-clue');
const submit = document.querySelector('.password > div');
const input = document.getElementById('password');

export class Login {
	constructor() {
		input.addEventListener('input', (e) => {
			if (e.target.value.length > 0) {
				submit.style.display = 'block';
			} else {
				submit.style.display = 'none';
			}
		});


		touchId.addEventListener('click', (e) => {
			password.style.animation = 'fadein 0.2s forwards ease-in-out';
			password.style.display = 'block';
			passwordClue.style.display = 'block';
			input.focus();
		});

		cancel.addEventListener('click', (e) => {
			window.history.back();
		});


		submit.addEventListener('click', (e) => {
			this.login(input.value);
		});

		password.addEventListener('submit', (e) => {
			e.preventDefault();
			this.login(input.value);
		})
	}
	login = (val) => {
		if (val === '123') {
			document.getElementById('auth').style.display = 'none';
			document.querySelector('main').style.animation = 'fadein 0.5s forwards ease-in-out';
			document.getElementById('dock').style.animation = 'appearFromBottom 0.7s forwards ease-in-out';
			document.querySelector('main').style.display = 'block';
			document.body.requestFullscreen();
		} else {
			password.animate([
				{
					transform: "translateX(15px)"
				},
				{
					transform: "translateX(-15px)"
				},
				{
					transform: "translateX(0)"
				}
			],
				{
					duration: 200,
					iterations: 2
				}
			)
		}
	}
}
