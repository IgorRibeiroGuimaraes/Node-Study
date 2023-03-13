//ProcessingInstruction.stdout.write("Hello word \n") //escrever algo na saída padrão

const question = [
    "Qual o seu nome??",
    "O que aprendi Hoje?",
    "O que me deixou aborrecido? e o que eu poderia melhorar",
    "O que me deixou feliz hoje??",
    "Quantas pessoas ajudei hoje",
]
    
const ask =(index = 0) =>{
    process.stdout.write("\n\n" + question[index] +" > ")
}

ask()

const answers =[]
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < question.length){
        ask(answers.length)
    } else{
      
        process.exit() // desliga o processo
    }
      
})  // coleta os dados 
 
process.on('exit', () => {
    console.log(`Bacana ${answers[0]}!!!
    
    O que você aprendeu hoje foi:
    ${answers[1]}

    o que te aborreceu e vocêpoderia melhorar foi:
    ${answers[2]}

    o que te deixou feliz foi: 
    ${answers[3]}

    voce ajudou ${answers[4]} pessoas!!!
    
    Volte amanhã para novas reflexões
    `)
    
})