const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    icon: 'fas fa-truck-moving',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    icon: 'fas fa-envelope',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    icon: 'fas fa-user-friends',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: 'fas fa-cogs',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const render = array => {
  const menu = document.getElementById('shallow-menu')
  const ulParent = document.createElement('ul')
  ulParent.setAttribute('class', 'shallow-list')

  array.forEach(item => {
    const li = document.createElement('li')
    li.setAttribute('class', 'shallow-item')

    const divParent = document.createElement('div')
    divParent.setAttribute('class', 'parent-menu')

    const a = document.createElement('a')
    a.setAttribute('href', item.link)
    a.innerText = item.title

    const i = document.createElement('i')
    i.setAttribute('class', item.icon)

    const span = document.createElement('span')
    span.innerHTML = '<i class="fas fa-angle-right"></i>'
    span.setAttribute('class', 'arrow')
    span.setAttribute('onclick', 'toggleMenu(this)')

    divParent.appendChild(i)
    divParent.appendChild(a)
    divParent.appendChild(span)

    li.appendChild(divParent)

    if (Array.isArray(item.children)) {
      const ulChild = document.createElement('ul')
      ulChild.setAttribute('class', 'sub-shallow')
      item.children.forEach(child => {
        const liChild = document.createElement('li')
        liChild.setAttribute('class', 'child-menu')

        const aChild = document.createElement('a')
        aChild.setAttribute('href', child.link)
        aChild.innerText = child.title

        liChild.appendChild(aChild)

        ulChild.appendChild(liChild)
      })
      li.appendChild(ulChild)
    }

    ulParent.appendChild(li)
  })

  menu.appendChild(ulParent)
}

render(shallowMenu)

const toggleMenu = span => {
  const div = span.parentNode
  const li = div.parentNode
  const ul = li.querySelector('ul')

  if (ul) {
    const isDisplay = ul.style.display === 'block'
    if (isDisplay) {
      ul.style.display = 'none'
      span.querySelector('i').style.color = 'white'
      span.querySelector('i').style.transform = 'rotate(0deg)'
    } else {
      ul.style.display = 'block'
      span.querySelector('i').style.color = '#0c93e3'
      span.querySelector('i').style.transform = 'rotate(90deg)'
    }
  }
}
