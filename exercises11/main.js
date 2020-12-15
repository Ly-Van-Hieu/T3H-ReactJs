// exercise 1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
//cách 1
function returnArray (charRepeat, numberRepeat) {
  if (typeof numberRepeat === 'number' && numberRepeat > 0) {
    const array = []
    for (let i = 1; i <= numberRepeat; i ++) {
      array.push(charRepeat)
    }
    return array
  }
  return 'số lần lặp phải là kiểu số và lớn hơn 0'
}

// exercise 2
function reverseArray (array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length/2; i ++) {
      const provisional = array[i]
      array[i] = array[array.length-1-i]
      array[array.length-1-i] = provisional
    }
    return array
  }
  return 'Dữ liệu nhập vào phải là dạng mảng'
}

// exercise 3
function deleteElementFalse (array) {
  if (Array.isArray(array)) {
    return array.filter(value => Boolean(value));
  }
  return 'Dữ liệu nhập vào phải là dạng mảng'
}

// exercise 4
function createObject (data) {
  const obj = {}
  data.forEach(value => {
    for (let i = 0; i < value.length/2; i ++) {
      obj[value[2*i]] = value[2*i+1]
    }
  })
  return obj
}

// exercise 5
function sortArray (array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length - 1; i ++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] > array[j]) {
            const provisional = array[i]
            array[i] = array[j]
            array[j] = provisional      
          }
      }
    }
    return array
  }
  return 'Dữ liệu nhập vào phải là dạng mảng'
}

// exercise 6
function checkObject (object) {
  const check = typeof(object) === 'object' && !Array.isArray(object)? true : false
  return check
}

// exercise 7
function getKeyAndValue (...keyInput) {
  const obj = { a: 1, b: 2, c: 3, d: 4 }
  for (let i = 0; i < keyInput.length; i ++) {
    for (let key in obj) {
      if (keyInput[i] === key) {
        delete obj[key]
      }
    }
  }
  return obj
}

// exercise 8
function deleteElement (...array) {
  if(array.length <= 5) {
    return 'mảng nhập vào phải có nhiều hơn 5 phần tử'
  }else {
    return array.splice(2,2)
  }
}

// exercise 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function getListStudentsFailPass () {
  const studentsFailPass = []

  students.forEach(student => {
    (student.score > 5 && student.name.search(/.+Duy.+/g) === -1)? studentsFailPass.push('Pass') : studentsFailPass.push('Fail')
  })
  return studentsFailPass
}

// exercise 10
function getScore () {
  const result = []

  students.forEach(student => {
    const score = String (student.score).split('.')
    const totalScore = Number(score[0]) + Number(score[1])
    const lastScore = String (totalScore)[String (totalScore).length - 1]
    if (Number(lastScore) > 5) {
      result.push(student)
    }
  })
  return result
}
