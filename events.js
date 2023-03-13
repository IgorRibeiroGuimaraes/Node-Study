/* const {EventEmitter} = require('events') */
/*  */
/* const ev = new EventEmitter() */
/*  */
/* ev.once('saySomething', (message) =>{ */
/*     console.log('Hello Word', message) */
/* } ) */
/*  */
/* ev.emit('saySomething'," Hello Igor") */
/* ev.emit('saySomething'," Hello Igor") */
/*  */
//once = ele vai ouvir o disparo uma única vez e ignorar os outros

//Entender como ele é a base para outros módulos


const { inherits } = require('util')
const {EventEmmiter} = require('events')

function Character(name){
    this.name = name
}

inherits(Character,EventEmmiter);

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!!`))

console.log('oh! E agora, quem poderá me defender?? ')
chapolin.emit('help') // herdando algo para algo