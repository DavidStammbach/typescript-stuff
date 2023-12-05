type X = {
  id: string
  x?: string
}

type Y = {
  id: string
  y?: string
}

type Z = {
  id: string
  y?: string
}

type XorYorZ = X | Y | Z

type XandYandZ = X & Y & Z

const createXYZ = (input: XorYorZ): XandYandZ => {
  return {
    id: input.id,
    ...('x' in input && { x: input.x }),
    ...('y' in input && { y: input.y }),
    ...('z' in input && { z: input.z }),
  }
}

const createXYZ2 = <T extends XorYorZ>(input: T): XandYandZ => {
  return input
}

console.log(createXYZ({ id: 'x', x: 'x' }))
console.log(createXYZ2({ id: 'x', x: 'x' }))
