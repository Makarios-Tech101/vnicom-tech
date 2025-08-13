

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
            github:'https://github.com/'
        },
        // { name: "Osaranmaye Tomiwa", 
        //   role: "Frontend Developer", 
        //   img: "/images/students/tomiwa.jpg", 
        //   link: "/stories/osaranmaye-tomiwa.html" 
        // },
        // { name: "Rohaenat Eniola", 
        //   role: "Product Designer", 
        //   img: "/images/students/roheenat.jpg", 
        //   link: "/stories/rohaenat-eniola.html" 
        // },
        // Add the rest of your alumni here...
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
        <h4>${a.review}</h4>
        <p>${a.profile}</p>
        <a class="view-quote-btn" href="${a.github}">Github</a>
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





    