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



