function printEvenNumbers (number) {
  if (typeof(number) !== 'number' || number < 1 || number > 30) {
    return 'data không hợp lệ'
  }{
    console.log('Các số chẵn:')
    let i = 2
    while (i <= number) {
      console.log(i)
      i += 2
    }
  }
}
