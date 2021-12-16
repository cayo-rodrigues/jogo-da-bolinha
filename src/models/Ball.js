class Ball {
    constructor() {
        this.positionX          = (window.innerWidth / 2) - 15
        this.positionY          = (window.innerHeight / 2) - 15
        this.speedX             = 5
        this.speedY             = 5
        this.ball               = document.createElement('div')
        this.ball.className     = 'ball'
        this.ball.style.left    = `${this.positionX}px`
        this.ball.style.top     = `${this.positionY}px`
    }

    moveBall() {
        this.detectCollision()

        this.positionX += this.speedX
        this.positionY += this.speedY

        this.ball.style.left = `${this.positionX}px`
        this.ball.style.top  = `${this.positionY}px`
    }

    detectCollision() {
        // invert X direction
        if (window.innerWidth - this.positionX - this.ball.clientWidth - this.speedX < 0 || this.positionX + this.speedX <= 0) {
            this.speedX = -this.speedX
        }
        // invert Y direction
        if (this.positionY + this.speedY <= 0) {
            this.speedY = -this.speedY
        }

        // looser
        if (window.innerHeight - this.positionY - this.ball.clientHeight - this.speedY < 0) {
            this.speedY = -this.speedY
            console.log('you lose')
        }
    }
}

export {Ball}