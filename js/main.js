//alert("Hallo Welt");
var toggle_menu = document.getElementById("toggle_menu"),
    main_menu = document.getElementById("main_menu");
toggle_menu.onclick = function() {
    // console.log("Test Test Test");
    main_menu.classList.toggle("open");
}