

// ALUMNI AND INNER PAGES GRID PAGINATION
document.addEventListener("DOMContentLoaded", () => {
    const alumni = [
        {   name: 'Oladapo', 
            img: '/images/students/oladapo.jpg', 
            profile: "Bowen University", 
            review: 'My training experience with Vnicom Tech Hub was informative and valuable.', 
            // linkedin: 'https://www.linkedin.com/in', 
            github: 'https://github.com/OladapoAdu',
        },
        {   name: 'David Nwachukwu', 
            img: '/images/students/david.JPG', 
            profile: "Redeemers University", 
            review: 'Coming soon', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/dave-codes101'
        },
        {   name: 'Segun Soyemi', 
            img: '/images/students/segun.JPG', 
            profile: "Coming soon", 
            review: 'VNICOM tech hub has helped me navigate my path in front-end web development', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/kira516' 
        },
        {
            name: 'John Omotoyinbo', 
            img: '/images/students/bolu.JPG', 
            profile: "Olabisi Onabanjo University", 
            review: 'Its been amazing so far. Amazing people!', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/'
        },
        {   name: 'Daniel Ogbara', 
            img: '/images/students/daniel.JPG', 
            profile: "Coming soon", 
            review: 'Coming soon', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/ogbara01'
        },
        {   name: 'Joshua Bolanle', 
            img: '/images/students/joshua.jpg', 
            profile: "Mountaintop University", 
            review: 'Was able to practically learn more about HTML and CSS and more course', 
            // linkedin:'https://www.linkedin.com/in' , 
            github:'#'
        },
        {   name: 'Ogundiran Muiz', 
            img: '/images/students/muiz.jpg', 
            profile: "Coming soon", 
            review: 'It’s easy to learn with Vnicom tech hub, I really want to appreciate their effort in the computer science world , Thank You !', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'#' 
        },
        {   name: 'AbdulMalik Idowu', 
            img: '/images/students/malik.JPG', 
            profile: "Gateway ICT Polytechnic", 
            review: 'Vnicom tech hub has all the resources for learning down from front end web development to back-end.They offer quality services.', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/malikidowu' 
        },
        {   name: 'Dorcas Akinyemi', 
            img: '/images/grid-img33.jpg', 
            profile: "Fashion Designer", 
            review: 'Great learning environment with lovely tutors.', 
            // linkedin:'https://www.linkedin.com/in' , 
            github:'#' 
        },
        {   name: 'Samuel Boluwatife', 
            img: '/images/students/samuel.jpg', 
            profile: "Coming soon", 
            review: 'vnicom tech hub offers quality services', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/Samuelboluwatife' 
        },
        {   name: 'Erijesu Aladejesu',
            img: '/images/students/erijesu.jpg', 
            profile: "Coming soon", 
            review: 'coming soon', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/phantom-x1' 
        },
    ];

const itemsPerPage = 6;
  let currentPage = 1;

  const grid = document.getElementById("alumni-grid");
  const pagination = document.getElementById("pagination");

  // Safety checks
  if (!grid) { console.error("#alumni-grid not found"); return; }
  if (!pagination) { console.error("#pagination not found"); return; }

  function cardTemplate(a) {
    const card = document.createElement("div");
    card.className = "grid-items";
    card.innerHTML = `
      <div class="grid-image">
          <img src="${a.img}" alt="${a.name}">
       
      </div>
      <div class="grid-content">
        <span>"${a.review}"</span>
        <h5>${a.name}</h5>
        <p>${a.profile}</p>
        <a class="view-quote-btn" href="${a.github}" target="_blank">Github</a>
      </div>
    `;
    return card;
  }

  function displayAlumni(page) {
    grid.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, alumni.length);
    alumni.slice(start, end).forEach(a => grid.appendChild(cardTemplate(a)));
  }

  function setupPagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(alumni.length / itemsPerPage);

    // Prev
    const prev = document.createElement("button");
    prev.textContent = "‹ Prev";
    prev.disabled = currentPage === 1;
    prev.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayAlumni(currentPage);
        setupPagination();
      }
    });
    pagination.appendChild(prev);

    // Numbers
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        displayAlumni(currentPage);
        setupPagination();
      });
      pagination.appendChild(btn);
    }

    // Next
    const next = document.createElement("button");
    next.textContent = "Next ›";
    next.disabled = currentPage === pageCount;
    next.addEventListener("click", () => {
      if (currentPage < pageCount) {
        currentPage++;
        displayAlumni(currentPage);
        setupPagination();
      }
    });
    pagination.appendChild(next);
  }

  displayAlumni(currentPage);
  setupPagination();
});





    