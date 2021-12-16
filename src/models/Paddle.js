class Paddle {
    constructor() {
        this.positionX          = (window.innerWidth / 2) - 75
        this.paddle             = document.createElement('div')
        this.paddle.className   = 'paddle'
        this.paddle.style.left  = `${this.positionX}px`
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX -= 5
            this.paddle.style.left = `${this.positionX}px`
        }
    }
    moveRight() {
        if (window.innerWidth - this.positionX - this.paddle.clientWidth > 10) {
            this.positionX += 5
            this.paddle.style.left = `${this.positionX}px`
        }
    }
    movePaddle(key) {
        if (key === 'ArrowLeft') {
            this.moveLeft()
        }
        if (key === 'ArrowRight') {
            this.moveRight()
        }
    }
}

export {Paddle}