
const love_btns = document.querySelectorAll('.love');

var clicks = 0;

love_btns.forEach(love_btn => {
	love_btn.addEventListener('mousedown', (e) => {
		love_btn.style.background = '#fff';
		love_btn.style.color = '#E7273F';
    love_btn.querySelector('.text').innerHTML = 'TE AMO!';

		createHearts(love_btn.querySelector('.icon-container'));
	});

	love_btn.addEventListener('mouseup', (e) => {
		love_btn.style.background = '#E7273F';
		love_btn.style.color = '#fff';
		love_btn.querySelector('.text').innerHTML = 'Clique mais vezes!!';
    clicks++;

    if(clicks > 2) {
		window.location.href = "./pictures.html";
    }
	});
})

function createHearts(container) {
	// create 5 hearts
	for(let i=0; i<15; i++) {
		setTimeout(() => {
			const heart = document.createElement('span');
			heart.classList.add('heart');
			heart.innerHTML = '<i class="fas fa-heart"></i>';
			heart.style.left = Math.random() * 100 + '%';
			heart.style.top = Math.random() * 100 + '%';
			heart.style.fontSize = Math.random() * 20 + 5 + 'px';
			heart.style.animationDuration = Math.random() * 2 + 3 + 's';
			container.appendChild(heart);

			setTimeout(() => {
				heart.remove();
			}, 3000);
		}, i * 100)
	}
}
