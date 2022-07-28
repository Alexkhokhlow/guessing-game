class GuessingGame {
    constructor(max,min,result) {
        this.max = 0;
        this.min = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min
        this.max = max
        this.result = Math.round((max+min)/2)
    }

    guess() { 
        return this.result
    }

    lower() {
        this.max = this.result
        this.setRange(this.min,this.max)
    }

    greater() {
        this.min = this.result
        this.setRange(this.min,this.max)
    }
}

module.exports = GuessingGame;
