type A = {
  id: 'a'
  text: 'some text'
  a: 'im only in type A'
}

type B = {
  id: 'b'
  text: 'some text'
  b: 'im only in type B'
}

type C = {
  id: 'c'
  text: 'some text'
  c: 'im only in type C'
}

type D = {
  id: 'd'
  text: 'some text'
  d: 'im only in type D'
}

type ABCD = A | B | C | D

const whatAmI: ABCD = {
  id: 'c',
  text: 'some text',
  c: 'im only in type C',
}

const processABCD = (input: ABCD) => {
  console.log(`someText: ${input.text}`)
  // TODO: how do I print out a, b, c, or d here?

  console.log(`I want to print out property a, b, c or d: ${input}`)
}

processABCD(whatAmI)

const processA = (a: A) => {
  console.log(a.a)
}

const processB = (b: B) => {
  console.log(b.b)
}

const processC = (c: C) => {
  console.log(c.c)
}

const processD = (d: D) => {
  console.log(d.d)
}

//

//

//

//

//

//

//

//

//

// if / else type guards
const processABCD1 = (input: ABCD) => {
  if ('a' in input) {
    processA(input)
  }

  if ('b' in input) {
    processB(input)
  }

  if ('c' in input) {
    processC(input)
  }

  if ('d' in input) {
    processD(input)
  }
}

// switch
const processABCD2 = (input: ABCD) => {
  switch (input.id) {
    case 'a':
      processA(input)
      break
    case 'b':
      processB(input)
      break
    case 'c':
      processC(input)
      break
    default:
      console.log('default')
  }
}

// map
const processMap = {
  a: processA as (input: ABCD) => void,
  b: processB as (input: ABCD) => void,
  c: processC as (input: ABCD) => void,
  d: processD as (input: ABCD) => void,
}

const processABCD3 = (input: ABCD) => {
  processMap[input.id](input)
}

const processABCD4 = <T extends ABCD>(input: T) => {
  processMap[input.id](input)
}

/*
processABCD1(whatAmI)

processABCD2(whatAmI)

processABCD3(whatAmI)


processABCD4(whatAmI)
*/

// generics
type MyType<T extends string, P> = {
  id: T
  text: string
  data: P
}

type E = MyType<'e', 'im only in type E'>
type F = MyType<'f', 'im only in type F'>
type G = MyType<'g', 'im only in type G'>
type H = MyType<'h', 'im only in type H'>

type EFGH = E | F | G | H

const whatAmI2: EFGH = {
  id: 'g',
  text: 'some text',
  data: 'im only in type G',
}

const processEFGH = <T extends EFGH>(input: T) => {
  console.log(`someText: ${input.text}`)
  console.log(`Property data: ${input.data}`)
}

processEFGH(whatAmI2)

/*
1. type guards
2. switch
3. && oneliner
4. sandro / chatgpt
5. map
6. generics
7. it depends
*/
