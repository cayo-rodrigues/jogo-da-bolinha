import { Paddle } from "./src/models/Paddle.js"
import { Ball } from "./src/models/Ball.js"

const paddle = new Paddle()
const ball = new Ball()

document.querySelector('main').append(paddle.paddle, ball.ball)

document.addEventListener('keydown', (event) => {
    paddle.movePaddle(event.code)
})