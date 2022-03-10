const toggle_btn = document.getElementById('toggle-nav')
const close_btn = document.getElementById('close')
const menu = document.getElementById('menu')

toggle_btn.addEventListener('click', ()=>{
    menu.classList.add('show')
})

close_btn.addEventListener('click', ()=>{
    menu.classList.remove('show')
})
