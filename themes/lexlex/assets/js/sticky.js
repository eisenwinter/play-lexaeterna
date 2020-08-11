const sticky = (id) => {
    const topPart = document.getElementById(id);
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

