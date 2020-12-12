function getSum (number) {
  if (typeof(number) !== 'number' || number < 1 || number > 30) {
    return 'data không hợp lệ'
  }{
    let sum = 0
    let i = 1
    while (i <= number) {
      sum += i
      i ++
    }

    console.log('Tổng các số: ' + sum)
  }
}
