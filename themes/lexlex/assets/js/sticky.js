const sticky = (id) => {
    const topPart = document.getElementById(id);
    if(topPart){
      const stick = topPart.offsetTop;
      if(topPart){
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
      if(entry.intersectionRatio > 0) {
        document.querySelector(`#main-navbar-menu a[href="#${id}"]`).classList.add('is-active')
      }else {
        document.querySelector(`#main-navbar-menu a[href="#${id}"]`).classList.remove('is-active')
      }
    })
  })
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
  })
}