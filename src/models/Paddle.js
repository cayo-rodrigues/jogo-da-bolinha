class Paddle {
    constructor(context, container) {
        this.sizeX              = 125
        this.sizeY              = 30
        this.ctx                = context
        this.container          = container
        this.positionX          = (container.width / 2) - (this.sizeX / 2)
        this.positionY          = (container.height - this.sizeY) - 5
        this.speed              = 5
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.rect(this.positionX, this.positionY, this.sizeX, this.sizeY)
        this.ctx.fill()
    }

    movePaddle(key) {
        if (key === 'ArrowLeft') {
            this.moveLeft()
        }
        if (key === 'ArrowRight') {
            this.moveRight()
        }
    }
    moveLeft() {
        if (this.positionX > 0) {
            this.positionX -= this.speed
        }
    }
    moveRight() {
        if (this.container.width - this.positionX > this.sizeX) {
            this.positionX += this.speed
        }
    }
}

export {Paddle}