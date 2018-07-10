var opinionSection = document.querySelector('.opinion');
opinionSection.remove();

var navMenu = document.querySelector('.mini-navigation-menu');
for (x = 0; x < navMenu.children.length; x += 1) {
  var menuItem = navMenu.children[x];
  if (menuItem.innerText.toLowerCase() === "opinion") {
    navMenu.removeChild(menuItem);
    break;
  }
}