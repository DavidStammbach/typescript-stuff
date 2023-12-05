/*
const compare = <T>(
    a: T extends any[] ? `Can't handle array...` : T,
    b: T extends any[] ? `Can't handle array...` : T,
): boolean => {
    if (typeof a === 'object' || typeof b === 'object') {
        throw new Error(`Can't handle object...`)
    }
    return a === b;
}

// export const compareResult = compare([], []);

export const compareResult = compare([1, 2, 3], [1, 2, 3]);
*/

const compare = <T>(
  a: T extends any[] ? 'No array allowed' : T,
  b: T extends any[] ? 'No array allowed' : T,
): boolean => {
  // this check is not necessary!
  /* if (Array.isArray(a) || Array.isArray(b)) {
        throw new Error('Comparison of two arrays is not possible...')
    } */
  return a === b
}

export const compareResult = compare(1, 2)
// compiler complains here
// const typeError = compare([1, 2, 3], [1, 2, 3]);
