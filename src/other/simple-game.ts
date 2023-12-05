import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('Hello there, please enter your name')

// create a loop that asks for the user's name until they enter 'exit'
let age: string
let name: string

const loop = () => {
  rl.question('', (keyboardInput) => {
    if (keyboardInput === 'exit') {
      console.log('Goodbye')
      rl.close()
      process.exit()
    } else {
      if (name) {
        console.log(`Your name is ${name}`)
        if (!age) age = keyboardInput
      } else {
        name = keyboardInput
        loop()
      }

      if (name)
        if (age) console.log(`You are ${age} years old`)
        else {
          console.log('How old are you?')
          loop()
        }

      if (name && age) {
        console.log('there is nothing else to do, type exit to finish')
        loop()
      }
    }
  })
}

loop()
