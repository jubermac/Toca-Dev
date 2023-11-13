document.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu-bottom");
  var sticky = menu.offsetTop;

  if (window.pageYOffset > sticky) {
    menu.style.position = "fixed";
    menu.style.top = "0";
    menu.style.width = "100%";
  } else {
    menu.style.position = "relative";
  }
});
