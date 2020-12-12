function printMultiplicationTable (number) {
  if (typeof(number) !== 'number' || number < 1 || number > 10) {
    return 'data không hợp lệ'
  }{
    console.log('In bang nhan:')
    let i = 1
    while (i <= 10) {
      console.log(number + ' x ' + i + ' = ' + number * i)
      i ++
    }
  }
}
