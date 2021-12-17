class Ball {
    constructor(context, container) {
        this.ctx                = context
        this.container          = container
        this.size               = 15
        this.positionX          = (container.width / 2) - (this.size / 2)
        this.positionY          = (container.height / 2) - (this.size / 2)
        this.speedX             = 5
        this.speedY             = -5
        this.looser             = false
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'red'
        this.ctx.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    moveBall() {
        this.detectEdgeCollision()

        this.positionX += this.speedX
        this.positionY += this.speedY
    }

    detectEdgeCollision() {
        // invert X direction
        if (this.container.width - this.positionX - this.size <= 0 || this.positionX - this.size <= 0) {
            this.speedX = -this.speedX
        }
        // invert Y direction
        if (this.positionY - this.size <= 0) {
            this.speedY = -this.speedY
        }

        // looser
        if (this.container.height - this.positionY - this.size <= 0) {
            console.log('you lose')
            this.looser = true
        }
    }

    detectPaddleCollision(paddle) {
        let distanceY = this.container.height - this.positionY - this.size - paddle.sizeY - paddle.gap

        let distanceXLeftToRight = paddle.positionX - (this.positionX + this.size)
        let distanceXRightToLeft = (this.positionX - this.size) - (paddle.positionX + paddle.sizeX)

        if (distanceXLeftToRight <= 0 && distanceXRightToLeft <= 0) {
            if (distanceY < 1 && distanceY > -1) {
                this.speedY = -this.speedY
            } else if (distanceY < -1) {
                this.speedX = -this.speedX
            }
        }
    }
}

export {Ball}