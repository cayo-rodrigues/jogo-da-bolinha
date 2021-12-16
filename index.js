import { Paddle } from "./src/models/Paddle.js"
import { Ball } from "./src/models/Ball.js"

// create paddle and ball
const paddle = new Paddle()
const ball = new Ball()

// put paddle and ball in the DOM
document.querySelector('main').append(paddle.paddle, ball.ball)

// keep track of what keys are being pressed
const pressedKeys = {
    'ArrowLeft': false,
    'ArrowRight': false
}

// listen for key presses
document.addEventListener('keydown', (event) => {
    if (Object.keys(pressedKeys).includes(event.code)) {
        pressedKeys[event.code] = true
    }
})
// listen for key releases
document.addEventListener('keyup', (event) => {
    if (Object.keys(pressedKeys).includes(event.code)) {
        pressedKeys[event.code] = false
    }
})

function startGame() {
    ball.moveBall()
    for (let key in pressedKeys) {
        if (pressedKeys[key]) {
            paddle.movePaddle(key)
        }
    }
    requestAnimationFrame(startGame)
}
startGame()