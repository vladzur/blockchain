import { Block } from './block.js'

export class Blockchain {

    constructor() {
        this.chain = [new Block(0, 'The beginning of the chain')]
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(data) {
        const lastBlock = this.getLastBlock()
        const block = new Block(lastBlock.index + 1, data, lastBlock.hash)
        this.chain.push(block)
    }

    validate() {
        for (let i = 1; i < this.chain.length; i++) {
            let prevBlock = this.chain[i - 1];
            let currBlock = this.chain[i];
            if (prevBlock.hash !== currBlock.previousHash) {
                return false
            }
            if (currBlock.hash !== currBlock.getHash()) {
                return false
            }
        }
        return true
    }

    toString() {
        return JSON.stringify(this.chain, null, 2)
    }

}