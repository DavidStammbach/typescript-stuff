const a = (input: string) => {
  console.log(`I am a() ${input}`)
}

const bla = (input: string) => {
  console.log(`I am b() ${input}`)
}

const c = (input: string) => {
  console.log(`I am c() ${input}`)
}

const d = (input: string) => {
  console.log(`I am d() ${input}`)
}

const obj = {
  a,
  b: bla,
  c,
  d,
}

obj.a('yoooo')
// @ts-ignore
obj.b('yoooo')

const accessProperty = 'c'
obj[accessProperty]('whoop whoop')
