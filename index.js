const ondermenu = document.getElementById("ondermenu")

function show(){
    console.log(ondermenu)
ondermenu.style.display = 'block'
ondermenu.parentElement.classList.add('selected')
console.log('klik')
}
function verberg(){
    ondermenu.classList.remove('selected')
    ondermenu.style.display ='none'
}

// const menu = document.getElementById('menu-lijst')
// menu.addEventListener('click', console.log(menu))
// function setActive(){
// console.log(menu)

// }
document.querySelectorAll(".nav-link").forEach((link) => {
    console.log(link.innerHTML)
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      console.log(link.href)
    }
});
// //responsive nav.
// function myFunction() {
//     var x = document.getElementById("sidebar");
//     console.log(x.id)
//     if (x.id === "sidebar") {
//       x.id += " responsive";
//     } else {
//       x.id = "sidebar";
//     }
//   }