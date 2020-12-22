function checkAccount (event) {
  const value = event.target.value
  const regex = /^[a-z0-9_]+$/g
  if (!value.match(regex)) {
    alert('Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới')
  }
}
