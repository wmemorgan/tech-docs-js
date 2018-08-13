/*-----Global variables-----*/
const openMenuButton = document.getElementById('menu-icon--small')
const closeMenuButton = document.getElementById('close-menu')
const sideNavLink = document.getElementsByClassName('side-nav-link')

/*-----Navigation functions-----*/
const removeActiveClass = _ => {
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active')
  }
}

const activeSelection = (item) => {
  return () => {
    if (document.querySelector(`.active`)) {
      removeActiveClass()
    }

    item.classList.add('active')
  }
}

for (let i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
  let element = document.getElementsByClassName('nav-link')[i]
  element.addEventListener("click", activeSelection(element))
}

for (let i = 0; i < document.getElementsByClassName('brand').length; i++) {
  let element = document.getElementsByClassName('brand')[i]
  element.addEventListener("click", removeActiveClass)
}


/*-----Side navigation functions-----*/
const openMenu = () => {
  document.getElementById('menu-main').display = 'grid';
}

const closeMenu = () => {
  document.getElementById('menu-main').display = 'none';
  removeActiveClass()
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

for (let i = 0; i < sideNavLink.length; i++) {
  sideNavLink[i].addEventListener("click", closeMenu)
}