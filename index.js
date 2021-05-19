import { Blockchain } from './blockchain.js'

const vladCoin = new Blockchain()
vladCoin.addBlock('one')
vladCoin.addBlock('two')
vladCoin.addBlock('three')
vladCoin.addBlock('four')

console.log(vladCoin.toString())
console.log(vladCoin.validate()) // true

vladCoin.chain[3].data = 'fake' // tampered chain

console.log(vladCoin.toString())
console.log(vladCoin.validate()) // false
