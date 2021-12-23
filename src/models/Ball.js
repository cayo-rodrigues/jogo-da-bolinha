class Ball {
    constructor(context, container) {
        this.ctx               = context
        this.container         = container
        this.size              = 15
        this.speed             = 5
        this.minDistanceDiff   = -5
        this.bouncingSound     = new Audio('../../public/assets/soundFx/pingPongBounce.wav')
        this.reset()
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'blue'
        this.ctx.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    moveBall() {
        this.detectEdgeCollision()

        this.positionX += this.speed * this.dirX
        this.positionY += this.speed * this.dirY
    }

    detectEdgeCollision() {
        // invert X direction
        if (this.container.width - this.positionX - this.size <= 0 || this.positionX - this.size <= 0) {
            this.playSound()
            this.dirX = -this.dirX
        }
        // invert Y direction
        if (this.positionY - this.size <= 0) {
            this.playSound()
            this.dirY = -this.dirY
        }

        // looser
        if (this.container.height - this.positionY - this.size <= 0) {
            this.looser = true
        }
    }

    detectPaddleCollision(paddle) {
        // vertical distance from the paddle
        let distanceY = this.container.height - this.positionY - this.size - paddle.sizeY - paddle.gap

        // horizontal distance from the paddle
        let distanceXLeftToRight = paddle.positionX - (this.positionX + this.size)
        let distanceXRightToLeft = (this.positionX - this.size) - (paddle.positionX + paddle.sizeX)

        if (distanceXLeftToRight <= 0 && distanceXRightToLeft <= 0) {
            if (distanceY < 1 && distanceY > this.minDistanceDiff) {
                this.playSound()
                this.dirY = -this.dirY
            } else if (distanceY < this.minDistanceDiff) {
                this.playSound()
                this.dirX = -this.dirX
            }
        }
    }

    randomDirection() {
        return (Math.floor(Math.random() * (1 - 0 + 1)) + 0) === 0 ? 1 : -1
    }

    playSound() {
        this.bouncingSound.currentTime = 0
        this.bouncingSound.play()
    }

    reset() {
        this.positionX       = (this.container.width / 2) - (this.size / 2)
        this.positionY       = (this.container.height / 2) - (this.size / 2)
        this.dirX            = this.randomDirection()
        this.dirY            = -1
        this.speed           = 5
        this.looser          = false
        this.minDistanceDiff = -5
    }
}

export {Ball}