'use strict'

//1
let a;
function itsMe(a) {
		return console.log(a!==''? ("It's me, " + a) : ("It's me, luidmilab") ); 

}

//2
let numOne;
let numTwo;

function compare(numOne, numTwo){
	let res;
	if (numOne > numTwo) {
		res = ('numOne > numTwo');
		

	}	else if (numOne < numTwo) {
		res =  ('umOne < numTwo');
		

	} 	else if (numOne !== numTwo) {
		res =  ('numOne == numTwo');
		

	} 	else if (typeof (numOne)!== 'number' || typeof(numTwo)!== 'number') {
		res = ('НЕ ЧИСЛО');
	
	}
	return res;

	}

	
//4
//Написать функцию “fact”, которая принимает 1 аргумент - число.
//Она должна вернуть факториал числа.

//Пример:
//fact(4) // 24
//fact(0) // 1
//fact(5) // 120, так как 1 * 2 * 3 * 4 * 5 = 120

//Факториал числа n - произведение всех натуральных чисел от 1 до n включительно.
			
	
let number;
function fact(number){
	  return (number != 1) ? number * fact(number - 1) : 1;
}

//3
	//Написать функцию “row”, которая принимает 4 аргумента - 3 числа  и строку которая может быть ‘>’ или ‘<’
//Она должна вернуть строку в которой числа стоят в порядке убывания или возрастания в зависимости от аргумента строки.

//Пример:
//row(3, -4, 5, '<') // вернет "-4 < 3 < 5"
//row(3, -4, 5, '>') // вернет "5 > 3 > -4"

let b;
let c;
let d;
let mark = '';

function row(a, b, c, mark){
	let result;
	if (mark === '>'){
		resalt = (functi)

	}

}