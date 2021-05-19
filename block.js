import SHA256 from 'crypto-js/sha256.js'

export class Block {
    constructor(index, data, previousHash = "") {
        this.index = index
        this.data = data
        this.timestamp = new Date()
        this.previousHash = previousHash
        this.nonce = 0
        this.hash = this.computeHash()
    }

    getKey() {
        return this.index + this.timestamp + this.previousHash + this.nonce + this.data
    }

    getHash() {
        return SHA256(this.getKey()).toString()
    }

    computeHash() {
        let hash = this.getHash()
        while (!hash.startsWith('0000')) {
            this.nonce++
            hash = this.getHash()
        }
        return hash
    }
}