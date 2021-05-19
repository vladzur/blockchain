import SHA256 from 'crypto-js/sha256.js'

export class Block {
    constructor(index, data, previousHash = "") {
        this.index = index
        this.data = data
        this.timestamp = new Date()
        this.previousHash = previousHash
        this.proof = 0
        this.hash = this.computeHash()
    }

    getKey() {
        return this.index + this.timestamp + this.previousHash + this.proof + this.data
    }

    getHash() {
        return SHA256(this.getKey()).toString()
    }

    computeHash() {
        let hash = this.getHash()
        while (!hash.startsWith('00000')) {
            this.proof++
            hash = this.getHash()
        }
        return hash
    }
}