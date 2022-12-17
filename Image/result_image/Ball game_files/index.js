var balls = document.querySelectorAll('.ball');
var board = document.getElementById('board');
var dispay_game_over = document.getElementById('hidden');
var board_wrapper = document.getElementById('board-wrapper');
var ballCount = 0;
var gameOver = false;
balls[0].addEventListener('animationend',
    gameOverEvent);
balls[1].addEventListener('animationend', gameOverEvent);
balls[2].addEventListener('animationend', gameOverEvent);

dispay_game_over.style.display = 'none';

function gameOverEvent() {
    balls[0].style.animationPlayState = 'paused';
    balls[1].style.animationPlayState = 'paused';
    balls[2].style.animationPlayState = 'paused';
    if (!gameOver) {
        board_wrapper.style.display = 'none';
        dispay_game_over.style.display = 'flex';
    }
    // https://stackoverflow.com/questions/20707519/div-square-width-size-based-on-100-height
    // https://www.w3schools.com/js/js_random.asp
    // https://stackoverflow.com/questions/20707519/div-square-width-size-based-on-100-height
}

function startGame() {
    console.log(board.width);
    balls.forEach(ball => {
        ball.classList.add('ball-move');
        ball.classList.remove('hide');
        ball.style.left = Math.floor(Math.random() * 90 + 1) + '%';
    });
}
function reset(num) {
    balls[num].classList.remove('hide');
    balls[num].classList.add('ball-move');
    balls[num].style.left = Math.floor(Math.random() * 90 + 1) + '%';
    console.log(balls[num].style.left);
    ballCount += 1;
    console.log(ballCount);
    var counter = '';
    counter += `Score: ${ballCount}`
    document.getElementById('show_count').innerText = counter;
}
function disappear(num) {

    balls[num].classList.add('hide');
    balls[num].classList.remove('ball-move');
}
var restart_btn = document.getElementById('restart-btn');

function onClick(num) {
    disappear(num)
    setTimeout(() => {
        reset(num)
    }, 10)
}

restart_btn.onclick = function () {
    window.location.reload();
}
