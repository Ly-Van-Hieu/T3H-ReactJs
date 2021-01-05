const data = [
  {
    id: 1,
    isEdit: false,
    checked: false,
    fullName: 'Nguyễn Văn Nam',
    gender: 'male',
    age: 12
  },
  {
    id: 2,
    isEdit: false,
    checked: true,
    fullName: 'Nguyễn Thị Vân',
    gender: 'female',
    age: 16
  },
  {
    id: 3,
    isEdit: true,
    checked: true,
    fullName: 'Phạm Văn Minh',
    gender: 'male',
    age: 16
  },
]

const createReadOnlyItem = (element) => {
  const html = `
    <tr>
      <td>
        <input onclick="selectItem(${element.id})" class="form-check-input" ${element.checked ? 'checked' : ''} type="checkbox" value="">
      </td>
      <td>${element.id}</td>
      <td>${element.fullName}</td>
      <td>${element.gender === 'male' ? 'Nam' : 'Nữ'}</td>
      <td>${element.age}</td>
      <td>
        <button onclick="renderEdit(${element.id})"type="button" class="btn btn-primary btn-sm">Edit</button>
        <button type="button" class="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  `
  return html
}

const createEditingItem = (element) => {
  const html = `
    <tr class = "isEdit">
      <td>
        <input onclick="selectItem(${element.id})" class="form-check-input" ${element.checked ? 'checked' : ''} type="checkbox" value="">
      </td>
      <td>${element.id}</td>
      <td><input id="fullName" value="${element.fullName}" /></td>
      <td>
        <select  id="gender">
        <option ${element.gender === 'male' ? 'selected' : ''} value="male">Nam</option>
        <option ${element.gender === 'female' ? 'selected' : ''} value="female">Nữ</option>
        </select>
      </td>
      <td><input id="age" value="${element.age}" /></td>
      <td>
        <button type="button" class="btn btn-success btn-sm">Save</button>
        <button type="button" class="btn btn-warning btn-sm">Cancel</button>
        <button type="button" class="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  `
  return html
}
const renderData = () => {
  const tbody = document.querySelector('table tbody')
  let html = ''

  data.forEach(element => {
    html += element.isEdit? createEditingItem(element) : createReadOnlyItem(element)
  })

  tbody.innerHTML = html
}
renderData()

const selectAll = event => {
  const isChecked = event.target.checked
  data.forEach(item => item.checked = isChecked)
  renderData()
}

const selectItem = id => {
  const item = data.find(row => row.id === id)
  item.checked = !item.checked

  let countCheckedItems = 0
  data.forEach(row => {
    if (row.checked) {
      countCheckedItems++
    }
  })

  const isCheckAll = countCheckedItems === data.length
  const inputCheckAll = document.getElementById('selectAll')
  inputCheckAll.checked = isCheckAll
}

const renderEdit = id => {
  const item = data.find(row => row.id === id)
  createEditingItem(item)
}
