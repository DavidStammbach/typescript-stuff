// eslint-disable-next-line no-use-before-define
functionRegular(6, 'hello')

// why does typescript complain here?
// eslint-disable-next-line no-use-before-define
functionExpressionRegular(4, 'gugus')

// @ts-ignore
// eslint-disable-next-line no-use-before-define
functionExpressionArrow(5, 'hi')

function functionRegular(x: number, y: string): void {
  console.log(`${x}, ${y}`)
}

const functionExpressionRegular = function (x: number, y: string): void {
  console.log(`${x}, ${y}`)
}

const functionExpressionArrow = (x: number, y: string): void => {
  console.log(`${x}, ${y}`)
}

// different ways to type functions...
const functionExpressionRegular2: (x: number, y: string) => void = function (
  x,
  y,
) {
  console.log(`${x}, ${y}`)
}

const functionExpressionArrow2: (x: number, y: string) => void = (x, y) => {
  console.log(`${x}, ${y}`)
}

// destructuring
function functionRegularDestructured({ x, y }: { x: number; y: string }): void {
  console.log(`${x}, ${y}`)
}

// functionRegularDestructured({ x: 5, y: 'bla' })

const functionExpressionArrowDestructured = ({
  x,
  y,
}: {
  x: number
  y: string
}): void => {
  console.log(`${x}, ${y}`)
}

// more ways to type functions with destructuring...
const functionRegularDestructured2: ({
  x,
  y,
}: {
  x: number
  y: string
}) => void = function ({ x, y }) {
  console.log(`${x}, ${y}`)
}

const functionExpressionArrowDestructured2: ({
  x,
  y,
}: {
  x: number
  y: string
}) => void = ({ x, y }) => {
  console.log(`${x}, ${y}`)
}
