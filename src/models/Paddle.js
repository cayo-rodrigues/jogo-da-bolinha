class Paddle {
    constructor() {
        this.positionX          = (window.innerWidth / 2) - 63
        this.speed              = 5
        this.paddle             = document.createElement('div')
        this.paddle.className   = 'paddle'
        this.paddle.style.left  = `${this.positionX}px`
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX -= this.speed
            this.paddle.style.left = `${this.positionX}px`
        }
    }
    moveRight() {
        if (window.innerWidth - this.positionX - this.paddle.clientWidth - this.speed > this.speed) {
            this.positionX += this.speed
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