/*-----Global variables-----*/
const openSideMenuButton = document.getElementById('menu-icon--small')
const closeSideMenuButton = document.getElementById('close-menu')
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

/*-----Side navigation functions-----*/
const openSideMenu = () => {
  document.getElementById('menu-side').style.width = '300px';
}

const closeSideMenu = () => {
  document.getElementById('menu-side').style.width = '0';
  removeActiveClass()
}

openSideMenuButton.addEventListener("click", openSideMenu);
closeSideMenuButton.addEventListener("click", closeSideMenu);

for (let i = 0; i < sideNavLink.length; i++) {
  sideNavLink[i].addEventListener("click", closeSideMenu)
}