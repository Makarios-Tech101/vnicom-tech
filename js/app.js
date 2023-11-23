
  function openInvitation() {
    var invitationContainer = document.getElementById('invitation-container');
    invitationContainer.classList.toggle('showIv')
  }

  function closeInvitation() {
    var invitationContainer = document.getElementById('invitation-container');
    invitationContainer.style.transform = 'scale(0)';
  }


  setTimeout(function() {
    openInvitation();
  }, 5000);



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


var btns = document.querySelectorAll('.oBtnNbg')
var views = document.getElementsByClassName('view')

btns[0].addEventListener('click', ()=>{
    views[0].style.display = "block"
    views[1].style.display = "none"
    btns[0].classList.add('bg')
    btns[1].classList.remove('bg')
    
})
btns[1].addEventListener('click', ()=>{
    views[1].style.display = "block"
    views[0].style.display = "none"
    btns[1].classList.add('bg')
    btns[0].classList.remove('bg')
})




    