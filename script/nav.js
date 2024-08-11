// elements
let backdrop = document.querySelector('.backdrop');
let drawer = document.querySelector('.drawer');
// function 
let AddClass = (x, y) => {
   if (!x.classList.contains(y)) {
      x.classList.add(y);
   }
}
let RemoveClass = (x, y) => {
   if (x.classList.contains(y)) {
      x.classList.remove(y);
   }
}
let ToggleClass = (x, y) => {
   x.classList.toggle(y);
}
let OpenDrawer = () => {
   AddClass(drawer, 'show');
   AddClass(backdrop, 'show');
   backdrop.onclick = () => {
      RemoveClass(drawer, 'show');
      RemoveClass(backdrop, 'show');
   }
}
let OpenPage = (x)=> {
   let activePage = document.querySelector('.page.show');
   let targetPage = document.querySelector(`.page.${x}-page`);
   RemoveClass(activePage,'show');
   AddClass(targetPage,'show');
}
let GoToHomePage = (x)=> {
   if (x != 0 && x) {
      setTimeout(()=>{OpenPage('home')},x)
   } else {
      OpenPage('home')
   }
}

addEventListener("DOMContentLoaded", (event) => {
   GoToHomePage(2000)
});