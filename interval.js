const timeout = 1000

const cheking = () => console.log('cheking!')

let interval = setInterval(cheking,timeout)

setTimeout(() => clearInterval(interval), 3000)