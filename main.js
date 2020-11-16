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

alert('Are You Ready?');

//SI TOCA ALGUN BOTON DOY POR COMENZADA LA PARTIDA, YA NO HAY MARCHA ATRAS HABER ELEGIDO MUERTE
buttons.addEventListener('click', startGame);

function startGame() {
	// OCULTAR BOTONES. PLAYERS, MARCADOR Y NUMERO DE JUEGOS MIENTRAS DOY PASO A LA JUGADA--->HECHO
	function hideScreenElements() {
		buttons.classList.add('hidden');
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
			handsShake();
		}
	};

	setInterval(countDown, 1000);

	//FUNCION PARA VIBRACION DE MANOS ANTES DE MOSTRAR LA JUGADA--->HECHO
	function handsShake() {
		imgPlayer.classList.add('handsShake');
		imgCpu.classList.add('handsShake');
	}
}

// CUANDO UN BOTON SEA CLICADO ME LLEVA A LA FUNCION GAME QUE FILTRARá LO QUE DEBE HACER SEGUN EL BOTON ELEGIDO--->HECHO

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

// HACER QUE CPU SAQUE JUGADA RANDOM---HECHO
function playCpu() {
	const hands = [ 'Piedra', 'Papel', 'Tijera' ];
	const handCpu = hands[Math.floor(Math.random() * hands.length)];
	return handCpu;
}
console.log(playCpu())

function game(event) {
	let user = event.target.innerHTML;
	let cpu=playCpu();
	console.log(user);
	console.log(cpu);
	playCpu()
	startGame();

	// CREO CONTADOR QUE UTILIZARé EN LAS VALIDACIONES PARA SUMAR PUNTOS--->HECHO
	let scorePlayer = 0;
	let scoreCPU = 0;
	let countGames = scorePlayer + scoreCPU;

	// SACAR MANOS Y MOSTRAR MENSAJES
	// PINTAR MARCADOR DENTRO DE SU PIZARRA--->HECHO
	// MOSTRAR NUMERO DE PARTIDAS JUGADAS ---AUN NO SE SI FUNCIONA
	// RETRASAR UN SEGUNDO EL MENSAJE
	// if (totalGames <= 5) {
		if (user != playCpu()) {
			if (user === 'Piedra' && cpu === 'Tijera') {
				imgPlayer.src = './images/rock_izq.jpg';
				imgCpu.src = './images/scissors_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML = scorePlayer += 1;
				totalGames.innerHTML = countGames;
			} else if (user === 'Papel' && cpu === 'Piedra') {
				imgPlayer.src = './images/paper_izq.jpg';
				imgCpu.src = './images/rock_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML = scorePlayer += 1;
				totalGames.innerHTML = countGames;
			} else if (user === 'Tijera' && cpu === 'Papel') {
				imgPlayer.src = './images/scissors_izq.jpg';
				imgCpu.src = './images/paper_der.jpg';
				message.innerHTML = 'YOU WIN!!';
				pointsPlayer.innerHTML = scorePlayer += 1;
				totalGames.innerHTML = countGames;
			} else {
				message.innerHTML = 'YOU LOOSE!!';
				pointsCpu.innerHTML = scoreCPU += 1;
				totalGames.innerHTML = countGames;
			}
		} else if (user === cpu) {
			message.innerHTML = 'EMPATE';
			totalGames.innerHTML = countGames + 1;
			//  NO PONER SI NO QUIERO EMPATES
		}
		//MOSTRAR BOTON ANTES DE LA SIGUIENTE TIRADA
		function showButtons(){
			buttons.classList.remove('hidden');
		}
		showButtons()
	// } else {
	// 	// VALIDAR QUIEN GANÓ
	// 	whoWin();
	// }
}


function whoWin() {
	if (pointsPlayer > pointsCpu) {
		message.innerHTML = 'Enhorabuena';
	} else if (pointsPlayer < pointsCpu) {
		message.innerHTML = 'Mala suerte';
	} else {
		message.innerHTML = 'Empate';
// NO PONER SI LOS PUNTOS DEL EMPARE NO CUENTAN
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

// ------------
