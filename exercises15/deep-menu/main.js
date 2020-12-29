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

const renderDeepMenu = (parent, array, nameClass) => {
  const ul = document.createElement('ul')
  ul.setAttribute('class', nameClass)

  array.forEach(item => {
    const li = document.createElement('li')
    if (item.isActive) {
      li.setAttribute('class', 'active')
    }

    const a = document.createElement('a')
    a.setAttribute('href', item.link)
    let html = ''
    if (item.subTitle) {
      html = `<div class="icon">
                <i class="${item.icon}"></i>
              </div>
              <div class="text">
                <span class="title">${item.title.toUpperCase()}</span>
                <span class="describe">${item.subTitle}</span>
              </div>`
    } else {
      html = `<div class="icon">
                <i class="${item.icon}"></i>
              </div>
              <div class="text">
                <span class="title">${item.title.toUpperCase()}</span>
              </div>`
    }
    a.innerHTML = html
    const span = document.createElement('span')
    span.setAttribute('class', 'arrow')

    li.appendChild(a)
    li.appendChild(span)

    if (Array.isArray(item.children)) {
      const nameClass = 'menu-in-' + item.title.toLowerCase().replace(' ', '-')
      renderDeepMenu(li, item.children, nameClass)
    }

    ul.appendChild(li)
  })

  parent.appendChild(ul)

}

const render = () => {
  const menu = document.querySelector('.menu')
  renderDeepMenu(menu, deepMenu, '')
}

render()
