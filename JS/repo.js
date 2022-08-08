let cancel_search = document.querySelector("a.search_btn");
cancel_search.addEventListener("click", function(e){
    e.preventDefault();
    let search = document.querySelector("div.search");
    if(search.style.display === "none"){
        search.style.display = "block";
    }else{
        search.style.display = "none";
    }
});

let search_del = document.querySelector("a.search_del");
search_del.addEventListener("click", function(e){
    e.preventDefault();
    let search = document.querySelector("div.search");
    if(search.style.display === "block"){
        search.style.display = "none";
    }else{
        search.style.display = "block";
    }

    let nav = document.querySelector("section.nav")
    if(nav.classList.contains('nav_show')){
        nav.classList.remove('nav_show');
    }else{
        nav.classList.add('nav_show');
    }

    let input_content = document.querySelector("input.input_content");
    input_content.value = '';

    const sideInner = document.querySelector(".sideInner");
    if(sideInner.style.display === 'none'){
        sideInner.style.display = 'block'
    }else{
        sideInner.style.display = 'none'
    }

});

let search_inner = document.querySelector("div.search_inner");
search_inner.addEventListener("click", function(){
    let search = document.querySelector("div.search");
    if(search.style.display === "block"){
        search.style.display = "none";
    }else{
        search.style.display = "block";
    }

    let nav = document.querySelector("section.nav")
    if(nav.classList.contains('nav_show')){
        nav.classList.remove('nav_show');
    }else{
        nav.classList.add('nav_show');
    }

    let input_content = document.querySelector("input.input_content");
    input_content.value = '';

    const sideInner = document.querySelector(".sideInner");
    if(sideInner.style.display === 'none'){
        sideInner.style.display = 'block'
    }else{
        sideInner.style.display = 'none'
    }
});

let search_content = document.querySelector("div.search_content");
search_content.addEventListener("click", function(e){
    e.stopPropagation();
});




const hamBar = document.querySelector("a.hamBar");
const sideInner = document.querySelector(".sideInner");
hamBar.addEventListener("click", function(e){
    e.preventDefault();
        const nav = document.querySelector("section.nav");
        nav.classList.toggle("nav_show");

        if(sideInner.style.display === 'none'){
            sideInner.style.display = 'block'
        }else{
            sideInner.style.display = 'none'
        }
});

sideInner.addEventListener("click", function(){
    if(sideInner.style.display === 'block'){
        sideInner.style.display = 'none'
            let nav = document.querySelector("section.nav")
            nav.classList.remove('nav_show');
    }else{
        sideInner.style.display = 'block'
    }
})


const drop_down1 = document.querySelectorAll("a.drop_down")[0]
const drop_down2 = document.querySelectorAll("a.drop_down")[1]

drop_down1.addEventListener("click", function(){
    const second_nav_1 = document.querySelectorAll(".second_nav")[0]
    const angleDown = document.querySelectorAll("i.fa-angle-down")[0]

    if(second_nav_1.style.display === 'none'){
        second_nav_1.style.display = 'block';
        angleDown.style.transform = 'rotate(180deg)';
    }else{
        second_nav_1.style.display = 'none';
        angleDown.style.transform = 'rotate(0deg)';
    }
})

drop_down2.addEventListener("click", function(){
    const second_nav_2 = document.querySelectorAll(".second_nav")[1]
    const angleDown = document.querySelectorAll("i.fa-angle-down")[1]

    if(second_nav_2.style.display === 'none'){
        second_nav_2.style.display = 'block'
        angleDown.style.transform = 'rotate(180deg)'
    }else{
        second_nav_2.style.display = 'none'
        angleDown.style.transform = 'rotate(0deg)'
    }
})







