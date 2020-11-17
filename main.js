'use strict';

const rock = document.getElementById('rockButton');
const paper = document.getElementById('paperButton');
const scissors = document.getElementById('scissorsButton');
const buttons = document.querySelector('.buttons');
const imgPlayer = document.getElementById('imgPlayer');
const imgCpu = document.getElementById('imgCpu');
const message = document.getElementById('message');
const players = document.getElementById('players');
const player = document.getElementById('player');
const compu = document.getElementById('cpu');
const punctuation = document.getElementById('punctuation');
const scoreBoard = document.getElementById('scoreBoard');
const pointsPlayer = document.getElementById('pointsPlayer');
const pointsCpu = document.getElementById('pointsCpu');
const totalGames = document.getElementById('totalGames');

alert('Are You Ready?');

//SI TOCA ALGUN BOTON DOY POR COMENZADA LA PARTIDA, YA NO HAY MARCHA ATRÁS, HABER ELEGIDO MUERTE
// buttons.addEventListener('click', startGame);
// startGame(game());

//PENDIENTE
// HACER QUE TODAS LAS IMAGENES MIDAN LO MISMO
// MOSTRAR QUIEN GANA AL FINAL SIN TENER QUE APRETAR UN BOTON
// AÑADIR VIBRACION ANTES DE MOSTRAR LA MANO
// AÑADIR ANIMACION AL MENSAJE
// PONER MODAL FINAL

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

function game(event) {
	let user = event.currentTarget.innerHTML;
	let cpu = playCpu();
	console.log(user);
	console.log(cpu);

	if (totalGames.innerHTML < 5) {
		if (user != cpu) {
			if (user === 'Piedra' && cpu === 'Tijera') {
				imgPlayer.src = './images/rock_izq.jpg';
				imgCpu.src = './images/scissors_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML++;
				totalGames.innerHTML++;
				hideButtons();
				setTimeout(() => (message.innerHTML = ''), 1000);
				setTimeout(showButtons, 1000);
			} else if (user === 'Papel' && cpu === 'Piedra') {
				imgPlayer.src = './images/paper_izq.jpg';
				imgCpu.src = './images/rock_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML++;
				totalGames.innerHTML++;
				hideButtons();
				setTimeout(() => (message.innerHTML = ''), 1000);
				setTimeout(showButtons, 1000);
			} else if (user === 'Tijera' && cpu === 'Papel') {
				imgPlayer.src = './images/scissors_izq.jpg';
				imgCpu.src = './images/paper_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML++;
				totalGames.innerHTML++;
				hideButtons();
				setTimeout(() => (message.innerHTML = ''), 1000);
				setTimeout(showButtons, 1000);
			} else {
				if (user === 'Papel' && cpu === 'Tijera') {
					imgPlayer.src = './images/paper_izq.jpg';
					imgCpu.src = './images/scissors_der.jpg';
				}
				if (user === 'Piedra' && cpu === 'Papel') {
					imgPlayer.src = './images/rock_izq.jpg';
					imgCpu.src = './images/paper_der.jpg';
				}
				if (user === 'Tijera' && cpu === 'Piedra') {
					imgPlayer.src = './images/scissors_izq.jpg';
					imgCpu.src = './images/rock_der.jpg';
				}
				message.innerHTML = 'YOU LOOSE!!';
				pointsCpu.innerHTML++;
				totalGames.innerHTML++;
				hideButtons();
				setTimeout(() => (message.innerHTML = ''), 1000);
				setTimeout(showButtons, 1000);
			}
		} else if (user === cpu) {
			if (user === 'Tijera' && cpu === 'Tijera') {
				imgPlayer.src = './images/scissors_izq.jpg';
				imgCpu.src = './images/scissors_der.jpg';
			}
			if (user === 'Papel' && cpu === 'Papel') {
				imgPlayer.src = './images/paper_izq.jpg';
				imgCpu.src = './images/paper_der.jpg';
			}
			if (user === 'Piedra' && cpu === 'Piedra') {
				imgPlayer.src = './images/rock_izq.jpg';
				imgCpu.src = './images/rock_der.jpg';
			}
			message.innerHTML = 'EMPATE';
			totalGames.innerHTML++;
			hideButtons();
			setTimeout(() => (message.innerHTML = ''), 1000);
			setTimeout(showButtons, 1000);
		}
	} else {
		hideScreenElements();
		showWinner();
	}
}

// MODAL FINAL

// const showModal = () => {
// 	message.innerHTML = 'Quieres la revancha o tienes miedo BITCH';
// 	modal.classList.remove('hidden');
// 	overlay.style.opacity = 1;
// AÑADIRLE AL HTML DOS BOTONES OCULTOS Y QUITARLE LA CLASE HIDEN AQUI
// };

// setTimeout(showModal, 5000);

// FUNCION PARA DAR INTRO AL JUEGO----> NO APLICADA AUN
function startGame() {
	hideScreenElements();
	let timer = 4;
	const countDown = () => {
		timer--;
		message.classList.add('countDownAnimation');
		message.style.fontSize = '550px';
		message.innerHTML = timer;

		if (timer === 0) {
			message.remove();
			showPunctuationAndPlayers();
			handsShake();
		}
	};
	setInterval(countDown, 1000);
}

//FUNCION PARA OCULTAR BOTONES. PLAYERS, MARCADOR Y NUMERO DE JUEGOS MIENTRAS DOY PASO A LA JUGADAS
function hideScreenElements() {
	hideButtons();
	hideImages();
	punctuation.classList.add('hidden');
	compu.classList.add('hidden');
	player.classList.add('hidden');
}
//FUNCION PARA VOLVER A MOSTRAR MARCADOR Y PLAYERS
function showPunctuationAndPlayers() {
	punctuation.classList.remove('hidden');
	player.classList.remove('hidden');
	compu.classList.remove('hidden');
}
//FUNCION PARA VIBRACION DE MANOS ANTES DE MOSTRAR LA JUGADA
function handsShake() {
	imgPlayer.classList.add('handsShake');
	imgCpu.classList.add('handsShake');
}

//FUNCION PARA HACER QUE CPU SAQUE JUGADA RANDOM
function playCpu() {
	const hands = [ 'Piedra', 'Papel', 'Tijera' ];
	const handCpu = hands[Math.floor(Math.random() * hands.length)];
	return handCpu;
}

// FUNCION PARA MOSTRAR BOTONES
function showButtons() {
	buttons.classList.remove('hidden');
}

// FUNCION PARA OCULTAR BOTONES
function hideButtons() {
	buttons.classList.add('hidden');
}

// FUNCION PARA OCULTAR IMAGENES
function hideImages() {
	imgPlayer.classList.add('hidden');
	imgCpu.classList.add('hidden');
}

//FUNCION PARA VALIDAR QUIEN GANÓ EL JUEGO
function showWinner() {
	if (pointsPlayer.innerHTML > pointsCpu.innerHTML) {
		message.innerHTML = 'E N H O R A B U E N A!!';
	} else if (pointsPlayer.innerHTML < pointsCpu.innerHTML) {
		message.innerHTML = 'M A L A  S U E R T E';
	} else {
		message.innerHTML = 'E M P A T E';
	}
}
