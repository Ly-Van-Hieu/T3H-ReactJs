function getCurrentTime() {
  const time = new Date()
  const day = time.getDate()
  const month = time.getMonth() + 1
  const year = time.getFullYear()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  return currentTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}

function hoverOn () {
  getCurrentTime()
  console.log(`Hover lúc: ${currentTime}`)
}

function hoverOut () {
  getCurrentTime()
  console.log(`Out hover lúc: ${currentTime}`)
}
