// compiler thinks this that below is a function call...
console.log('yoyo')
;(function () {
  console.log('yoyo')
})()

const yo = (() => {
  console.log('yo')
})()
