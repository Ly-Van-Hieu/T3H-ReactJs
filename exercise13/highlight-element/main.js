function getSelect (event) {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
  console.log(selection)
}
