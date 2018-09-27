//среднее арифметические значение, суммы двух кодов эмодзи
function add(a) {
	let b = '❤️🇺🇦';
	let res = a !== '' ? (a.charCodeAt(0) + a.charCodeAt(1) + a.charCodeAt(2) + a.charCodeAt(3)) / 2: 
	(b.charCodeAt(0) + b.charCodeAt(1) + b.charCodeAt(2) + b.charCodeAt(3)) / 2;
	return res

}


