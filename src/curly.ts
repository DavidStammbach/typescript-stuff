const trueish = true

const multi = () => {
  if (trueish) {
    console.log('a')
    console.log('b')
  }
}

const single = () => {
  if (trueish) {
    console.log('a')
  }
}

/* "curly": ["error", "all"] */
/* "curly": ["error", "multi"] */
