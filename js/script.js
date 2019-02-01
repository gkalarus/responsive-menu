document.addEventListener("DOMContentLoaded", function () {
  var about = document.querySelector('.m-nav__item');
  var subLinks = document.querySelectorAll('.m-nav__item--sub');
  var subLink = document.querySelector('.m-nav__item--sub')
  var button = document.querySelector('.m-nav__button');
  var body = document.body;
  var overlay = document.createElement('div');
  var checkbox = document.querySelector('.m-nav__checkbox');

  overlay.style.width = '100%';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = '#000';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.opacity = '0.6';
  overlay.className = 'overlay';

  function handleCloseNav() {
    if (checkbox.checked === true) {
      checkbox.checked = false;
    }
  }

  about.addEventListener('click', function () {
    this.firstElementChild.classList.toggle('clicked');
    subLinks.forEach(function (link) {
      link.classList.toggle('hidden');
    })
  })

  button.addEventListener('click', function () {
    if (checkbox.checked === true) {
      overlay.parentElement.removeChild(overlay);
    } else {
      body.appendChild(overlay);
    }

    if (!subLink.classList.contains('hidden')) {
      about.firstElementChild.classList.toggle('clicked');
      subLinks.forEach(function (link) {
        link.classList.toggle('hidden');
      })
    }
  })

  overlay.addEventListener('click', function() {
    this.parentElement.removeChild(this);
    handleCloseNav();
  })

  window.addEventListener('resize', function() {
    var width = window.innerWidth;

    if(width >= 1200 && checkbox.checked === true  ) {
      overlay.parentElement.removeChild(overlay);
      checkbox.checked = false;
    }
  })

});