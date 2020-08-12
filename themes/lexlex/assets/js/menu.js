const sticky = () => {
  const topPart = document.getElementById('main-nav');
  if (topPart) {
    const stick = topPart.offsetTop;
    if (topPart) {
      window.onscroll = () => {
        if (window.pageYOffset > stick) {
          topPart.classList.add("is-fixed-top");
        } else {
          topPart.classList.remove("is-fixed-top");
        }
      }
    }
  }
}

const highlight = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#main-navbar-menu a[href="#${id}"]`).classList.add('is-active')
      } else {
        document.querySelector(`#main-navbar-menu a[href="#${id}"]`).classList.remove('is-active')
      }
    })
  })
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
  })
}


const burgerMenu = () => {
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if (burgers.length > 0) {
    burgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}

const go = (fx) => {
  return () => fx.forEach(f => f())
}
