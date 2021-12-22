import { Paddle } from "./src/models/Paddle.js"
import { Ball } from "./src/models/Ball.js"
import { Game } from "./src/models/Game.js"

const game = new Game()
const infoBar = document.querySelector('header')
game.displayHighestScore(infoBar.querySelector('.highest-score'))

// where the elements are drawn
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// set apropriate dimensions
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// create paddle and ball
const paddle = new Paddle(context, canvas)
const ball = new Ball(context, canvas)

// listen for key presses
document.addEventListener('keydown', (event) => {
    if (Object.keys(game.pressedKeys).includes(event.code)) {
        game.pressedKeys[event.code] = true
    }
    if (event.key === 'Enter') {
        resetGame()
    }
})
// listen for key releases
document.addEventListener('keyup', (event) => {
    if (Object.keys(game.pressedKeys).includes(event.code)) {
        game.pressedKeys[event.code] = false
    }
})

function resetGame() {
    cancelAnimationFrame(game.animationRequest)

    const gameOverMsg = document.querySelector('.game-over-msg')
    if (gameOverMsg) gameOverMsg.remove()

    game.updateHighestScore()
    game.displayHighestScore(infoBar.querySelector('.highest-score'))
    game.resetScore()

    ball.reset()
    paddle.reset()

    startGame()
}

function startGame() {
    context.fillStyle = '#FFF'
    context.fillRect(0, 0, canvas.width, canvas.height)

    game.score++
    game.displayCurrentScore(infoBar.querySelector('.current-score'))

    ball.draw()
    paddle.draw()

    if (ball.looser) {
        game.displayGameOverMsg()
        return
    }

    ball.detectPaddleCollision(paddle)
    ball.moveBall()

    for (let key in game.pressedKeys) {
        if (game.pressedKeys[key]) {
            paddle.movePaddle(key)
        }
    }
    game.animationRequest = requestAnimationFrame(startGame)
}
startGame()