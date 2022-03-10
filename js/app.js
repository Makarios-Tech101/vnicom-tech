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
