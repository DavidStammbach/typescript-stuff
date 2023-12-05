const any: any = 'some string'

const unknown: unknown = 'some string'

export const anyType = () => {
  console.log(`any: ${any + 2}`)
}

export const unknownType = () => {
  // error: Object is of type 'unknown'
  // console.log(`unknown: ${unknown + 2}`);

  if (typeof unknown === 'number') console.log(`addition: ${unknown + 2}`)

  if (typeof unknown === 'string')
    console.log(`concatination: ${unknown.concat(' 2')}`)
}
