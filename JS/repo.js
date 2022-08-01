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
});

let search_content = document.querySelector("div.search_content");
search_content.addEventListener("click", function(e){
    e.stopPropagation();
});




const hamBar = document.querySelector("a.hamBar");
hamBar.addEventListener("click", function(e){
    e.preventDefault();
const nav = document.querySelector("section.nav");
    nav.classList.toggle("nav_show")
});



