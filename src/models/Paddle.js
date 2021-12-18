class Paddle {
    constructor(context, container) {
        this.ctx               = context
        this.container         = container
        this.speed             = 5
        this.sizeX             = 125
        this.sizeY             = 30
        this.gap               = 5
        this.reset()
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.rect(this.positionX, this.positionY, this.sizeX, this.sizeY)
        this.ctx.fill()
    }

    movePaddle(key) {
        if (key === 'ArrowLeft') {
            if (this.positionX > 0) {
                this.positionX -= this.speed
            }
        }
        if (key === 'ArrowRight') {
            if (this.container.width - this.positionX > this.sizeX) {
                this.positionX += this.speed
            }
        }
    }

    reset() {
        this.positionX = (this.container.width / 2) - (this.sizeX / 2)
        this.positionY = (this.container.height - this.sizeY) - this.gap
    }
}

export {Paddle}