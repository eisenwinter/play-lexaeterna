const sticky = (id) => {
    var topPart = document.getElementById(id);
    var stick = header.offsetTop;
    if(topPart){
        window.onscroll = () => {
            if (window.pageYOffset > stick) {
                topPart.classList.add("sticky");
              } else {
                topPart.classList.remove("sticky");
              }
        }
    }

}

