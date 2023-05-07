const underMenuItems = document.querySelectorAll('.undermenu-items');

underMenuItems.forEach(function (item) {
    item.addEventListener('mouseover', function (e) {
        this.style.backgroundColor = "rgb(144, 68, 60)";
    });
    item.addEventListener('mouseout', function (e) {
        this.style.backgroundColor = "rgb(21, 22, 23)";
    });
});

const subMenus = document.querySelectorAll('.undermenu-right');
console.log (menuItems);

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('mouseenter', () => {
    subMenus[index].classList.add('active');
  });

  menuItem.addEventListener('mouseleave', () => {
    subMenus[index].classList.remove('active');
  });
});