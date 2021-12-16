class Paddle {
    constructor() {
        this.positionY          = (window.innerHeight / 2) - 75
        this.paddle             = document.createElement('div')
        this.paddle.className   = 'paddle'
        this.paddle.style.top   = `${this.positionY}px`
    }

    moveUp() {
        if (this.positionY > 0) {
            this.positionY -= 5
            this.paddle.style.top = `${this.positionY}px`
        }
    }
    moveDown() {
        if (window.innerHeight - this.positionY - this.paddle.clientHeight > 10) {
            this.positionY += 5
            this.paddle.style.top = `${this.positionY}px`
        }
    }
}

class PaddleLeft extends Paddle {
    constructor() {
        super()
        this.paddle.classList.add('paddle__left')
    }

    movePaddle(key) {
        if (key === 'KeyW') {
            this.moveUp()
        }
        if (key === 'KeyS') {
            this.moveDown()
        }
    }
}

class PaddleRight extends Paddle {
    constructor() {
        super()
        this.paddle.classList.add('paddle__right')
    }

    movePaddle(key) {
        if (key === 'ArrowUp') {
            this.moveUp()
        }
        if (key === 'ArrowDown') {
            this.moveDown()
        }
    }
}

export {PaddleLeft, PaddleRight}