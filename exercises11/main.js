// exercise 1
function repeat (word, times) {
  const array = []
  for (let i = 1; i <= times; i ++) {
    array.push(word)
  }
  return array
}

// exercise 2
function reverseArray (array) {
  const newArr = []
  for (let i = array.length - 1; i >= 0; i --) {
    newArr.push(array[i])
  }
  return newArr
}

// exercise 3
function deleteElementFalse (array) {
  return array.filter(value => Boolean(value));
}

// exercise 4
function createObject (data) {
  const obj = {}
  data.forEach(value => {
    obj[value[0]] = value[1]
  })
  return obj
}

// exercise 5
function sortArray (array) {
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

// exercise 6
function checkObject (object) {
  const check = typeof(object) === 'object' && !Array.isArray(object)? true : false
  return check
}

// exercise 7
function getKeyAndValue (object, ...keyDelete) {
  for (let i = 0; i < keyDelete.length; i ++) {
    for (let key in object) {
      if (keyDelete[i] === key) {
        delete object[key]
      }
    }
  }
  return object
}

// exercise 8
function deleteElement (array) {
  if (array.length <= 5) {
    return 'mảng nhập vào phải có nhiều hơn 5 phần tử'
  } else {
    return array.splice(2, 2)
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
