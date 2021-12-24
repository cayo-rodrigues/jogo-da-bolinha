class Game {
    constructor() {
        this.difficulty  = 1
        this.score       = 0
        this.pressedKeys = {'ArrowLeft': false, 'ArrowRight': false}
        this.animationRequest = 0
        this.updateHighestScore()
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

    updateHighestScore() {
        this.highestScore = localStorage.getItem('highestScore')

        if (this.highestScore) {
            if (this.highestScore < this.score) {
                this.highestScore = this.score
            }
        } else {
            this.highestScore = this.score
        }
        localStorage.setItem('highestScore', this.highestScore)
    }

    displayHighestScore(container) {
        container.innerHTML = `<h3>Highest Score: ${this.highestScore}</h3>`
    }

    updateDifficulty(paddle, ball) {
        if (this.score % 1000 === 0) {
            ball.speed += 1
            paddle.speed += 1
            this.difficulty++
        }
        if (this.difficulty % 6 === 0) {
            ball.minDistanceDiff -= 5
        }
    }
}

export {Game}