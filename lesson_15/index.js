(function() {
	function generateList(numOfNum, numbersParent) {
		const items = [];
		

		for (let i = 0; i < numOfNum; i += 1) {
			const item = document.createElement('span');

			item.innerText = i + 1;

			numbersParent.appendChild(item);
			items.push(item);

			if (i < numOfNum - 1) {
				const coma = document.createElement('span');
				coma.innerText = ', ';
				numbersParent.appendChild(coma);
			}
		}

		return items;
	}
	const numOfNum = 7;
	const numbersParent = document.getElementById('numbers');
	const items = generateList(numOfNum, numbersParent);
	const startBtn = document.getElementById('start');
	const pauseBtn = document.getElementById('pause');
	const stopBtn = document.getElementById('stop');
	const count = document.getElementById('count');
	const x1Btn = document.getElementById('x1');
	const x2Btn = document.getElementById('x2');
	const x3Btn = document.getElementById('x3');
	let speed = 1000;
	let id;
	let seconds = 0;

	pauseBtn.disabled = true;
	stopBtn.disabled = true;
	
	startBtn.addEventListener('click', () => {
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;


		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, speed);

	});

	pauseBtn.addEventListener('click', () => {
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		clearInterval(id);
	});

	stopBtn.addEventListener('click', () => {
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		stopBtn.disabled = true;
		clearInterval(id);
		seconds = 0;
		count.innerText = '0 seconds';
	});

	x1Btn.addEventListener('click', () => {
		x1Btn.disabled = true;
		x2Btn.disabled = false;
		x3Btn.disabled = false;
		startBtn.disabled = false;
		clearInterval(id);
		speed = 1000;
				
		
	});

	x2Btn.addEventListener('click', () => {
		x2Btn.disabled = true;
		x1Btn.disabled = false;
		x3Btn.disabled = false;
		startBtn.disabled = false;
		clearInterval(id);
		speed = 1000 / 2;
		
	});

	x3Btn.addEventListener('click', () => {
		x3Btn.disabled = true;
		x2Btn.disabled = false;
		x1Btn.disabled = false;
		startBtn.disabled = false;
		clearInterval(id);
		speed = 1000 / 3;

		

	});

	
}())