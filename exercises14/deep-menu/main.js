const nodeDeepMenu = document.querySelector('.menu')
let className = 'deep-menu'
let innerHTML = ''
function getInterHTML (menu) {
  menu.forEach(value => {
    innerHTML += `
      <li>
        <a href="${value['link']}">
            <div class="icon">
                <i class="${value['icon']}"></i>
            </div>
            <div class="text">
                <span class="title">${value['title'].toUpperCase()}</span>
                <span class="describe">${value['subTitle']}</span>
            </div>
        </a>
      </li>`
  })
  return innerHTML = `<ul class = ${className}>${innerHTML}</ul>`
}
getInterHTML(deepMenu)
nodeDeepMenu.innerHTML = innerHTML

function getSubMenu (deepMenu, className) {
  let subMenu = ''

  deepMenu.forEach(value => {
    subMenu += `
      <li>
        <a href="${value['link']}">
            <div class="icon">
                <i class="${value['icon']}"></i>
            </div>
            <div class="text">
                <span class="title">${value['title'].toUpperCase()}</span>
            </div>
        </a>
      </li>`
  })
  return innerHTML = `<ul class = ${className}>${subMenu}</ul>`
}

function setClassActive () {
  deepMenu.forEach((value, index) => {
    if (value['isActive']) {
      document.querySelector('.menu ul li:nth-child(' + (index + 1) + ')').className = 'active'
    }
  })
}
setClassActive ()
function setClassName (deepMenu, nameClass) {
  let data = ''
  let nodeSubMenu = ''

  deepMenu.forEach((value, index) => {
    if (value['children']) {
      data = document.querySelector(`.menu .${nameClass} li:nth-child(${index+1})`).innerHTML
      nodeSubMenu = document.querySelector(`.menu .${nameClass} li:nth-child(${index+1})`)
      className = `menu-in-${value['title'].toLowerCase().replace(' ','-')}`
      nodeSubMenu.innerHTML = data + getSubMenu(value['children'], className)
    }
  })
}
setClassName(deepMenu,className)
