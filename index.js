let cbx = document.getElementById('check');

let navList = document.getElementById('navList');

cbx.addEventListener('change', (e) => {
  if (e.target.checked) {
    navList.style = 'left: 0';
  } else {
    navList.style = 'left: -100%';
  }
});
