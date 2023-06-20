var ondermenu = document.getElementById("ondermenu")
function show(){
    console.log(ondermenu)
ondermenu.style.display = 'block'
ondermenu.classList.add('selected')
console.log('klik')
}
function verberg(){
    ondermenu.classList.remove('selected')
    ondermenu.style.display ='none'
}