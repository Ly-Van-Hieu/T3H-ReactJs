// ex1: in bảng nhân
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

// ex2: in số chẵn
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

//ex3: Tính tổng từ 1 đến n
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

//ex4: In ra n!
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

//ex5: đếm xem trong mảng có bao nhiêu số chẵn
function countEvenNumbers () {
  let count = 0
  for (let i = 0; i < arguments.length; i ++) {
    if (typeof(arguments[i]) == 'number' && !(arguments[i] % 2)) {
      count ++
    }
  }
  return ('có ' + count + ' số chẵn')
}

//ex6: xóa đi các chữ cái bị trùng lặp
function deleteDuplication (array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i])
    }
  }
  return newArray
}

//ex7: 1 object từ 2 array
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]

const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 8, score: 6.1 }
]

const mergeStudents = (names, scores) => {
  const result = []

  const findItemInScores = item => {
    for (let i = 0; i < scores.length; i++) {
      const currentStudent = scores[i]
      if (currentStudent.id === item.id) {
        return currentStudent
      }
    }
    return null
  }

  names.forEach(item => {
    const student = findItemInScores(item)
    result.push({
      id: item.id,
      name: item.name,
      score: (student && student.score) || null
    })
  })
  return result
}

//ex8: tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
function findMinMaxList (students) {
  let min = students[0] ? students[0].score : 11
  let max = -1
  const minList = []
  const maxList = []

  // Get min & max scores
  students.forEach(student => {
    if (student.score < min) {
      min = student.score
    }
    if (student.score > max) {
      max = student.score
    }
  })

  // Get students
  students.forEach(student => {
    if (student.score === min) {
      minList.push(student)
    }
    if (student.score === max) {
      maxList.push(student)
    }
  })
  return {
    minList,
    maxList
  }
}
