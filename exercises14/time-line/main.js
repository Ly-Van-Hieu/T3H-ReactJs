const timeline = [
  {
    year: '1934',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
  },
  {
    year: '1937',
    content: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex agus, vatius et pulvinar in, pretium non nisi.'
  },
  {
    year: '1940',
    content: 'Porin iaculis, nibh eget sfficitur varuis, libero tellus porta dolor, at pulvinar tortor ex eget ligula, Integer eu dapibus arcu, sit amet sollicitudin eros.'
  },
]
window.onload = () => {
  const ul = document.createElement('ul') 
  ul.classList.add('timeline')
  let innerHTML = ''
  const createTimeline = timeline => {
    timeline.forEach(value => {
      innerHTML += `
      <li>
        <div>
          <div class="text">
            <h2>${value['year']}</h2>
            <span>${value['content']}</span>
          </div>
        </div>
      </li>`
    })
    return innerHTML = `<ul class = 'timeline'>${innerHTML}</ul>`
  }
  createTimeline(timeline)
  document.querySelector('.wrapper').innerHTML = innerHTML
  function setClassName () {
    const liElement = document.querySelectorAll('.wrapper .timeline li')
    console.log(liElement)
    for (let i = 1; i <= liElement.length; i ++) {
      if (i % 2) {
        document.querySelector(`.wrapper .timeline li:nth-child(${i})`).className = 'item_right'
        document.querySelector(`.wrapper .timeline li:nth-child(${i}) div`).className = 'timeRight'
      } else {
        document.querySelector(`.wrapper .timeline li:nth-child(${i})`).className = 'item_left'
        document.querySelector(`.wrapper .timeline li:nth-child(${i}) div`).className = 'timeLeft'
      }
    }
      
  }
  setClassName()
}
