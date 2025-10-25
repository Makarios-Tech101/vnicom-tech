
  // function openInvitation() {
  //   var invitationContainer = document.getElementById('invitation-container');
  //   invitationContainer.classList.toggle('showIv')
  // }

  // function closeInvitation() {
  //   var invitationContainer = document.getElementById('invitation-container');
  //   invitationContainer.style.transform = 'scale(0)';
  // }


  // setTimeout(function() {
  //   openInvitation();
  // }, 5000);



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


// var btns = document.querySelectorAll('.oBtnNbg')
// var views = document.getElementsByClassName('view')

// btns[0].addEventListener('click', ()=>{
//     views[0].style.display = "block"
//     views[1].style.display = "none"
//     btns[0].classList.add('bg')
//     btns[1].classList.remove('bg')
    
// })
// btns[1].addEventListener('click', ()=>{
//     views[1].style.display = "block"
//     views[0].style.display = "none"
//     btns[1].classList.add('bg')
//     btns[0].classList.remove('bg')
// })

document.addEventListener("DOMContentLoaded", function() {
    var btns = document.querySelectorAll('.oBtnNbg');
    var views = document.getElementsByClassName('view');

    if (btns.length >= 2) {
        btns[0].addEventListener('click', () => {
            views[0].style.display = "block";
            views[1].style.display = "none";
            btns[0].classList.add('bg');
            btns[1].classList.remove('bg');
        });

        btns[1].addEventListener('click', () => {
            views[1].style.display = "block";
            views[0].style.display = "none";
            btns[1].classList.add('bg');
            btns[0].classList.remove('bg');
        });
    }
});

// DROPDOWN JAVASCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      this.parentElement.classList.toggle("active");
    });
  });
});

// SCROLL TO THE TOP BUTTON
const scrollTopBtn = document.getElementById("scroll-top-button");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { 
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Scroll smoothly to top when clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// FOR THE COUNTER
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 100; 

            const updateCounter = () => {
                if (count < target) {
                    count += speed;
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });
    }

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    let intervalId;

    window.addEventListener("scroll", () => {
        if (isInViewport(document.querySelector(".counter-section"))) {
            if (!intervalId) {
                runCounters(); 
                intervalId = setInterval(runCounters, 6000); 
            }
        } else {
            clearInterval(intervalId); 
            intervalId = null;
        }
    });
});



// TESTIMONIALS SECTION
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        {
            img: "/images/students/josephine.jpg",
            text: "My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.",
            name: "Josephine Taiwo Kayode",
            role: "Product Designer at Vnicom Solutions",
            link: "/stories/josephine-kayode.html"
        },
        {
            img: "/images/students/Eniyii.jpg",
            text: "It was a fun learning Experience with challenging tutors who strive to improve their students and themselves alike",
            name: "Eniiyi Heritage",
            role: "Works at Zenith Bank",
            link: "/stories/eniiyi-heritage.html"
        },
        {
            img: "/images/students/opeyemi.jpg",
            text: "Vnicom Tech Hub eased and sped up my learning process. I must say it is a platform specifically ordained by God for me to be trained in...",
            name: "Fatai Balikis Opeyemi",
            role: "UI/UX Designer at Pacer Labs",
            link: "/stories/opeyemi-balikis.html"
        },
        {
            img: "/images/students/mayowa.jpg",
            text: "My training experience at Vnicom Tech Hub was both intensive and transformative. It provided a solid practical foundation...",
            name: "Mayowa Oyeniran",
            role: "Application Developer at Nova Bank",
            link: "/stories/mayowa-oyeniran.html"
        },
        {
            img: "/images/students/feranmi.jpg",
            text: "I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development...",
            name: "Gbenga Oladunjoye Feranmi",
            role: "Full Stack Web Developer at Vnicom Solutions",
            link: "/stories/feranmi-oladunjoye.html"
        },
    ];

    let currentIndex = 0;

    const thumbs = document.querySelectorAll(".avatars-row .avatar");
    const mainImg = document.querySelector(".testimonial-image img");
    const mainLink = document.querySelector(".testimonial-image a"); // get the link wrapper

    const textEl = document.querySelector(".quote");
    const nameEl = document.querySelector(".testimonial-name");
    const roleEl = document.querySelector(".testimonial-role");

    function updateTestimonial(index) {
        const t = testimonials[index];

        // Update link and image
        mainImg.src = t.img;
        mainLink.href = t.link;

        // Update text
        textEl.textContent = `“${t.text}”`;
        nameEl.textContent = t.name;
        roleEl.textContent = t.role;

        // Active thumbnail
        thumbs.forEach(thumb => thumb.classList.remove("active"));
        thumbs[index].classList.add("active");
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            currentIndex = index;
            updateTestimonial(currentIndex);
        });
    });

    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    }, 4000);

    updateTestimonial(currentIndex);
});



