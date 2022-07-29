const hamBar = document.querySelector("a.hamBar");
hamBar.addEventListener("click", function(e){
    e.preventDefault();
const nav = document.querySelector("section.nav");
    // if(nav.style.display === "none"){
    //     nav.style.display = "flex"
    // }else{
    //     nav.style.display = "none";
    // }
    nav.classList.toggle("nav_show")
});

window.addEventListener("resize", function(){
    let swiper_slide_img = document.querySelectorAll("img.home_top_img");
    if(window.screen.width <= 414){
        swiper_slide_img[0].setAttribute("src", "../img/rwd1.jpg");
        swiper_slide_img[1].setAttribute("src", "../img/rwd2.jpg");
        swiper_slide_img[2].setAttribute("src", "../img/rwd3.jpg");
    } else {
        swiper_slide_img[0].setAttribute("src", "../img/1.jpg");
        swiper_slide_img[1].setAttribute("src", "../img/2.jpg");
        swiper_slide_img[2].setAttribute("src", "../img/3.jpg");
    }
})


