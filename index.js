import { Paddle } from "./src/models/Paddle.js"
import { Ball } from "./src/models/Ball.js"
import { Game } from "./src/models/Game.js"

export const IS_MOBILE_SCREEN = window.innerWidth < 1024

const infoBar = document.querySelector('header')

const game = new Game()
game.displayHighestScore(infoBar.querySelector('#highest-score'))
game.displayInstructions()

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
document.addEventListener('keydown', handleKeyPresses)
// listen for key releases
document.addEventListener('keyup', handleKeyPresses)

// listen for arrow buttons presses and releases (mobile)
document.querySelectorAll('.arrow-btn').forEach((btn) => {
    btn.addEventListener('touchstart', handleTouches)
    btn.addEventListener('touchend', handleTouches)
})


function handleKeyPresses(event) {
    const isKeyDown = event.type === 'keydown'

    if (event.code in game.pressedKeys) {
        game.pressedKeys[event.code] = isKeyDown
    }
    if (isKeyDown && event.key === 'Enter') {
        resetGame()
    }
}


function handleTouches(event) {
    let target = event.target

    if (event.target.tagName === 'IMG') {
        target = event.target.closest('button')
    }

    game.pressedKeys[target.dataset.key] = (
        event.type === 'touchstart'
        || event.type === 'mousedown'
    )
}


export function resetGame() {
    cancelAnimationFrame(game.animationRequest)

    const gameOverMsg = document.querySelector('.modal-basic__game-over-msg')
    if (gameOverMsg) gameOverMsg.remove()

    const instructionsList = document.querySelector('.modal-basic__instructions-list')
    if (instructionsList) instructionsList.remove()

    game.updateHighestScore()
    game.displayHighestScore(infoBar.querySelector('#highest-score'))
    game.resetScore()
    game.resetDifficulty()

    ball.reset()
    paddle.reset()

    startGame()
}

function startGame() {
    context.fillStyle = '#FFF'
    context.fillRect(0, 0, canvas.width, canvas.height)

    game.score++
    game.updateDifficulty(paddle, ball)
    game.displayCurrentScore(infoBar.querySelector('#current-score'))
    game.updateHighestScore()
    game.displayHighestScore(infoBar.querySelector('#highest-score'))

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