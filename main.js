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

// MENSAJE PREGUNTANDO SI ESTA LISTO PARA JUGAR--->HECHO

alert('Are You Ready Nigga?');

// CUANDO UN BOTON SEA CLICADO ME LLEVA A LA FUNCION GAME QUE FILTRARá LO QUE DEBE HACER SEGUN EL BOTON ELEGIDO--->HECHO

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

function game(user, cpu) {
	// CREO CONTADOR QUE UTILIZARé EN LAS VALIDACIONES PARA SUMAR PUNTOS--->HECHO
	let scorePlayer = 0;
	let scoreCPU = 0;
	let countGames = scorePlayer + scoreCPU;

	// OCULTO BOTONES MIENTRAS DOY PASO A LA JUGADA--->HECHO

	buttons.classList.add('hidden');

	// OCULTAR PLAYERS, MARCADOR Y NUMERO DE JUEGOS--->HECHO
	function hideScreenElements() {
		punctuation.classList.add('hidden');
		compu.classList.add('hidden');
		player.classList.add('hidden');
	}
	hideScreenElements();

	// CUENTA ATRAS DE TRES SEGUNDOS--->HECHO

	
	let timer = 4;
	const countDown = () => {
		
		timer--;
		message.classList.add('countDownAnimation');
		message.style.fontSize = '550px';
		message.innerHTML = timer;

		if (timer === 0) {
			message.remove();
			// VOLVER A MOSTRAR MARCADOR Y PLAYERS--->HECHO
			punctuation.classList.remove('hidden');
			player.classList.remove('hidden');
			compu.classList.remove('hidden');
			//AÑADIR VIBRACION A LAS MANOS ANTES DE MOSTRAR LA MANO--->HECHO!
			imgPlayer.classList.add('handsShake');
			imgCpu.classList.add('handsShake');
		}
	};

	setInterval(countDown, 1000);

	// HACER QUE CPU SAQUE JUGADA RANDOM
	function playCpu() {
		const hands = [ rock, paper, scissors ];
		Math.random();

		const handCpu = hands[Math.floor(Math.random() * hands.length)];
		return handCpu;
	}

	// while (totalGames < 5) {

	// SACAR MANOS Y MOSTRAR MENSAJES--->INCOMPLETO NO FUNCIONA EL WHILE AUN
	// PINTAR MARCADOR DENTRO DE SU PIZARRA--->HECHO
	// MOSTRAR NUMERO DE PARTIDAS JUGADAS ---AUN NO SE SI FUNCIONA
	// RETRASAR UN SEGUNDO EL MENSAJE

	if (user != cpu) {
		if (user === rock && cpu === scissors) {
			imgPlayer.src = './images/rock_izq.jpg';
			imgCpu.src = './images/scissors_der.jpg';
			message.innerHTML = 'YOU WIN!!';
			pointsPlayer.innerHTML = scorePlayer += 1;
			totalGames.innerHTML = countGames;
		} else if (user === paper && cpu === rock) {
			imgPlayer.src = './images/paper_izq.jpg';
			imgCpu.src = './images/rock_der.jpg';
			message.innerHTML = 'YOU WIN!!';
			pointsPlayer.innerHTML = scorePlayer += 1;
			totalGames.innerHTML = countGames;
		} else if (user === scissors && cpu === paper) {
			imgPlayer.src = './images/scissors_izq.jpg';
			imgCpu.src = './images/paper_der.jpg';
			message.innerHTML = 'YOU WIN!!';
			pointsPlayer.innerHTML = scorePlayer += 1;
			totalGames.innerHTML = countGames;
		} else {
			// message.innerHTML = 'YOU LOOSE!!';
			pointsCpu.innerHTML = scoreCPU += 1;
			totalGames.innerHTML = countGames;
		}
	} else if (user === cpu) {
		message.innerHTML = 'EMPATE';
	}

	// }
}

//MOSTRAR BOTON ANTES DE LA SIGUIENTE TIRADA
buttons.classList.remove('hidden');

// VALIDAR QUIEN GANÓ
// function whoWin() {
// 	if (pointsPlayer > pointsCpu) {
// 		message.innerHTML = 'Enhorabuena';
// 	} else if (pointsPlayer < pointsCpu) {
// 		message.innerHTML = 'Mala suerte';
// 	} else {
// 		message.innerHTML = 'Empate';
// 	}
// }
// whoWin();

// MODAL FINAL

// const showModal = () => {
// 	message.innerHTML = 'Quieres la revancha o tienes miedo BITCH';
// 	modal.classList.remove('hidden');
// 	overlay.style.opacity = 1;
// AÑADIRLE AL HTML DOS BOTONES OCULTOS Y QUITARLE LA CLASE HIDEN AQUI
// };

// setTimeout(showModal, 5000);

// ------------
