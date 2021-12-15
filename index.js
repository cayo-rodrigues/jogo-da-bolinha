import { PaddleLeft, PaddleRight } from "./src/models/Paddles.js"
import { Ball } from "./src/models/Ball.js"

const paddle1 = new PaddleLeft()
const paddle2 = new PaddleRight()
const ball = new Ball()

document.querySelector('main').append(paddle1.paddle, paddle2.paddle, ball.ball)

document.addEventListener('keydown', (event) => {
    paddle1.movePaddle(event.code)
    paddle2.movePaddle(event.code)
})