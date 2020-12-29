const edit = editButton => {
  const td = editButton.parentNode
  const tr = td.parentNode

  const name = tr.querySelector('.name')
  const htmlName = `<input type="text" value="${name.innerText}">`
  name.innerHTML = htmlName

  const gender = tr.querySelector('.gender')
  const htmlGender = `<input type="text" value="${gender.innerText}">`
  gender.innerHTML = htmlGender

  const age = tr.querySelector('.age')
  const htmlAge = `<input type="text" value="${age.innerText}">`
  age.innerHTML = htmlAge

  const save = td.querySelector('.save')
  const cancel = td.querySelector('.cancel')
  const edit = td.querySelector('.edit')
  if (edit) {
    const isDisplay = edit.style.display === 'none'
    isDisplay ? edit.style.display = 'inline-block' : edit.style.display = 'none'
  }
  if (edit.style.display === 'inline-block') {
    save.style.display = 'none'
    cancel.style.display = 'none'
  } else {
    save.style.display = 'inline-block'
    cancel.style.display = 'inline-block'
  }
}

const save = saveButton => {
  const td = saveButton.parentNode
  const tr = td.parentNode

  const name = tr.querySelector('.name')
  const inputName = name.querySelector('input')
  name.innerHTML = inputName.value

  const gender = tr.querySelector('.gender')
  const inputGender = gender.querySelector('input')
  gender.innerHTML = inputGender.value

  const age = tr.querySelector('.age')
  const inputAge = age.querySelector('input')
  age.innerHTML = inputAge.value

  const save = td.querySelector('.save')
  const cancel = td.querySelector('.cancel')
  const edit = td.querySelector('.edit')
  if (edit) {
    const isDisplay = edit.style.display === 'none'
    isDisplay ? edit.style.display = 'inline-block' : edit.style.display = 'none'
  }
  if (edit.style.display === 'inline-block') {
    save.style.display = 'none'
    cancel.style.display = 'none'
  } else {
    save.style.display = 'inline-block'
    cancel.style.display = 'inline-block'
  }
}

// const cancel = cancelButton => {
//   const td = cancelButton.parentNode
//   const tr = td.parentNode

//   const name = tr.querySelector('.name')
//   console.log(name)
//   const htmlName = name.innerText
//   name.innerHTML = htmlName

//   const gender = tr.querySelector('.gender')
//   const htmlGender = gender.innerText
//   gender.innerHTML = htmlGender

//   const age = tr.querySelector('.age')
//   const htmlAge = `<input type="text" value="${age.innerText}">`
//   age.innerHTML = htmlAge

//   const save = td.querySelector('.save')
//   const cancel = td.querySelector('.cancel')
//   const edit = td.querySelector('.edit')
//   if (edit) {
//     const isDisplay = edit.style.display === 'none'
//     isDisplay ? edit.style.display = 'inline-block' : edit.style.display = 'none'
//   }
//   if (edit.style.display === 'inline-block') {
//     save.style.display = 'none'
//     cancel.style.display = 'none'
//   } else {
//     save.style.display = 'inline-block'
//     cancel.style.display = 'inline-block'
//   }
// }
