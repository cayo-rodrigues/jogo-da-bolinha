class Game {
    constructor() {
        this.pressedKeys = {'ArrowLeft': false, 'ArrowRight': false}
        this.animationRequest = 0
    }

    displayGameOverMsg() {
        const container = document.querySelector('.game-over-container')
        const div       = document.createElement('div')
        const h1        = document.createElement('h1')
        const btn       = document.createElement('button')

        div.className   = 'game-over-msg'
        h1.innerText    = 'Game Over'
        btn.innerText   = 'Press Enter/Return to reset'

        div.append(h1, btn)
        container.innerHTML = ''
        container.append(div)
    }
}

export {Game}