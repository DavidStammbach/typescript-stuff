// this function never returns a value but always throws
export const functionNeverReturns: (statusCode: number) => never = (
  statusCode: number,
) => {
  if (statusCode === 1) throw Error('Error 1')
  if (statusCode === 2) throw Error('Error 2')
  // if this line is missing, typescript will complain since this function should never return
  throw Error('Unknown Error')
}
