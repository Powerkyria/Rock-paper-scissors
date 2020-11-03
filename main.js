'use strict';

const op1 = 'Piedra';
const op2 = 'Papel';
const op3 = 'Tijera';

function game(user, cpu) {
	if (user != cpu) {
		if (user === op1 && cpu === op3) {
			console.log('El usuario GANA con ' + op1);
		} else if (user === op2 && cpu === op1) {
			console.log('El usuario GANA con ' + op2);
		} else if (user === op3 && cpu === op2) {
			console.log('El usuario GANA con ' + op3);
		}else{
            console.log('La CPU GANA!!');
        }
	} else if(user === cpu){
        console.log('EMPATE');
    }
}
game();
