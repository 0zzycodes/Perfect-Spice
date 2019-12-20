let openSide = document
  .querySelector("#openSidebar")
  .addEventListener("click", function() {
    document.querySelector("#sideNavBar").style.width = "70%";
    document.querySelector("#sideNavBar").style.transition = "300ms ease-out";
  });
let closeSide = document
  .querySelector("#closeSidebar")
  .addEventListener("click", function() {
    document.querySelector("#sideNavBar").style.width = "0";
  });
