class Game {
    constructor() {
        this.score       = 0
        this.pressedKeys = {'ArrowLeft': false, 'ArrowRight': false}
        this.animationRequest = 0
    }

    displayGameOverMsg() {
        const container = document.querySelector('.game-over-container')
        const div       = document.createElement('div')
        const h1        = document.createElement('h1')
        const span       = document.createElement('span')

        div.className   = 'game-over-msg'
        h1.innerText    = 'Game Over'
        span.innerText  = 'Press Enter/Return to reset'

        div.append(h1, span)
        container.innerHTML = ''
        container.append(div)
    }

    displayCurrentScore(container) {
        container.innerHTML = `<h3>Score: ${this.score}</h3>`
    }

    resetScore() {
        this.score = 0
    }
}

export {Game}