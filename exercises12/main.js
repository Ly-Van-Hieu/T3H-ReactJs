// exercise 1
function isEqual (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }
  return false
}

// exercise 2
const arrayOutput = []
function flatten (array) {
  array.forEach(element => {
    if (Array.isArray(element)) {
      return flatten(element)
    } else {
      return arrayOutput.push(element)
    }
  })
  return arrayOutput
}

// exercise 3
function chunk (array, elementNumber) {
  const result = []

  for (let i = 0; i < array.length / elementNumber; i ++) {
    const newArray = []

    for (let j = 0; j < elementNumber; j ++) {
      if (elementNumber * i + j < array.length) {
        newArray.push(array[elementNumber * i + j])
      }
    }

    result.push(newArray)
  }

  return result
}

// exercise 4
const intersection = (...arrays) => {
  if (!arrays.length) {
    return []
  }
  if (arrays.length === 1) {
    return arrays[0]
  }
  const [arr1, arr2] = arrays
  let result = []
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if (item2 === item1) {
        result.push(item1)
        arrays.splice(0, 2)
        const items = intersection(result, ...arrays)
        result = [...result, ...items]
      }
    })
  })
  return result
}
// exercise 5
function compareDate (dateString) {
  const date = new Date(dateString)
  const time = new Date(2020, 11, 30, 12, 30, 32)
  console.log(time)
  date.getTime() - time.getTime() > 0? console.log('after') : (date.getTime() - time.getTime()) < 0? console.log('before') : console.log('equals')
}

// exercise 6
function checkEmail (email) {
  const regexp = /^[a-z][a-z0-9_\.]+@[a-z0-9]+(\.[a-z0-9]+)+$/g
  return Boolean (email.match(regexp) && !email.match(/__/g) && !email.match(/\.\./g))
}

// exercise 7
function checkUserName (userName) {
  const regexp = /^[a-z][a-z0-9_]{1,9}$/g
  return Boolean (userName.match(regexp) && !userName.match(/__/g))
}
