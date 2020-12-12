function printFactorial (number) {
  if (typeof(number) !== 'number' || number < 1 || number > 30) {
    return 'data không hợp lệ'
  }{
    let factorial = 1
    let i = 1
    while (i <= number) {
      factorial *= i
      i ++
    }
    console.log(number + '! = ' + factorial)
  }
}
