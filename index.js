import { Paddle } from "./src/models/Paddle.js"
import { Ball } from "./src/models/Ball.js"

// where the elements are drawn
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// set apropriate dimensions
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// create paddle and ball
const paddle = new Paddle(context, canvas)
const ball = new Ball(context, canvas)

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
    context.fillStyle = '#FFF'
    context.fillRect(0, 0, canvas.width, canvas.height)

    if (ball.looser) {
        return
    }
    ball.draw()
    // ball.detectPaddleCollision(paddle)
    ball.moveBall()

    paddle.draw()
    for (let key in pressedKeys) {
        if (pressedKeys[key]) {
            paddle.movePaddle(key)
        }
    }
    requestAnimationFrame(startGame)
}
startGame()