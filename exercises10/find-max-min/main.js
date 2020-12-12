function findStudentRank () {
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]

  let scoreMin = students[0].score
  let scoreMax = students[0].score
  let theBest
  let theBad

  for (let i = 1 ; i < students.length; i ++) {
    if (students[i].score < scoreMin) {
      scoreMin = students[i].score
    }

    if (students[i].score > scoreMax) {
      scoreMax = students[i].score
    }
  }
  for (let i = 0 ; i < students.length; i ++) {
    if (students[i].score === scoreMax) {
      theBest = students[i]
    }

    if (students[i].score === scoreMin) {
      theBad = students[i]
    }
  }

  return {theBest, theBad}
}
