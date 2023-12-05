export const getNestedObjectValue = <
  T,
  TProperty extends keyof T,
  TNestedProperty extends keyof T[TProperty],
>(
  object: T,
  property: TProperty,
  nestedProperty: TNestedProperty,
) => {
  return object[property][nestedProperty]
}

const someObject = {
  bla: {
    a: 'string',
    b: 15,
  },
  blub: {
    c: false,
    d: 'another string',
  },
}

const nestedValue = getNestedObjectValue(someObject, 'bla', 'b')

// compiler complains here
// const typeError = getNestedObjectValue(someObject, 15, 'b');

/* export const getNestedObjectValue = <
    T,
    TProperty extends keyof T,
    TNestedProperty extends keyof T[TProperty]>(
    object: T,
    property: TProperty,
    nestedProperty: TNestedProperty,
) => {
    return object[property][nestedProperty];
}; */
