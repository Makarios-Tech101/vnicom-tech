const toggle_btn = document.getElementById('toggle-nav')
const close_btn = document.getElementById('close')
const links = document.getElementsByClassName('close')
const menu = document.getElementById('menu')

toggle_btn.addEventListener('click', ()=>{
    menu.classList.add('show')
})

Array.from(links).forEach(link => {
    link.addEventListener('click', ()=>{
        menu.classList.remove('show')
    } )
})

close_btn.addEventListener('click', ()=>{
    menu.classList.remove('show')
})

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
// var btn3 = document.getElementById('btn3')
var view1 = document.getElementById('view1')
var view2 = document.getElementById('view2')
// var view3 = document.getElementById('view3')



var display = document.getElementById('display')

btn1.addEventListener('click', ()=>{
    btn1.classList.add('btn1')
    btn2.style.background = ""
    // btn3.style.background = ""

    view1.style.display = "block"
    view2.style.display = "none"
    // view3.style.display = "none"
    
})

btn2.addEventListener('click', ()=>{
    btn1.classList.remove('btn1')
    
    btn2.style.background = "#ffbf00"
    // btn3.style.background = ""
    view2.style.display = "block"
    // view3.style.display = "none"
    view1.style.display = "none"

})

// btn3.addEventListener('click', ()=>{
//     btn1.style.background = ""
//     btn2.style.background = ""
//     btn3.style.background = "#ffbf00"
//     view3.style.display = "block"
//     view1.style.display = "none"
//     view2.style.display = "none"


// })