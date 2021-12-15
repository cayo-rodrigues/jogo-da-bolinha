class Paddle {
    constructor() {
        this.paddle = document.createElement('div')
        this.paddle.className = 'paddle'
    }
}

class PaddleLeft extends Paddle {
    constructor() {
        super()
        this.paddle.classList.add('paddle__left')
    }

    movePaddle(key) {
        console.log(key)
    }
}

class PaddleRight extends Paddle {
    constructor() {
        super()
        this.paddle.classList.add('paddle__right')
    }

    movePaddle(key) {
        console.log(key)
    }
}

export {PaddleLeft, PaddleRight}