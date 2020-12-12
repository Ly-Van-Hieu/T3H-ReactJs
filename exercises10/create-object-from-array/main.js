function createObjectStudents () {
  let students = []
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
    { id: 7, score: 6.1 }
  ]

  function createStudent(id, name, score) {
    this.id = id
    this.name = name
    this.score = score
  }

  for (let i = 0; i < studentNames.length; i ++) {
    for (let j = 0; j < studentScores.length; j ++) {
      if (studentNames[i].id === studentScores[j].id) {
        let student = new createStudent (studentNames[i].id, studentNames[i].name, studentScores[j].score)
        students.push(student)
      }
    }
  }

  console.log(students)
}
