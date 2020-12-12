function countEvenNumbers () {
  let count = 0
  for (let i = 0; i < arguments.length; i ++) {
    if (typeof(arguments[i]) == 'number' && !(arguments[i] % 2)) {
      count ++
    }
  }
  return ('có ' + count + ' số chẵn')
}
