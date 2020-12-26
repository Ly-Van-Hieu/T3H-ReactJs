const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'About us',
    subTitle: 'About us',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fas fa-globe-americas',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fas fa-comments',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fas fa-globe-americas',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fas fa-users',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fas fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fas fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fab fa-envira',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fas fa-server',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fas fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'fas fa-image',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'far fa-envelope',
  },
]

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
