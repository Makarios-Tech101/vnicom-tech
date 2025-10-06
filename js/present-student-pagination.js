

// ALUMNI AND INNER PAGES GRID PAGINATION
document.addEventListener("DOMContentLoaded", () => {
    const alumni = [
        {   name: 'Erijesu Aladejesu',
            img: '/images/students/erijesu1.png', 
            profile: "Undergraduate", 
            review: 'Learning coding at Vnicom Tech has been an amazing experience. The instructors are supportive, explain clearly, and the environment is excellent for growth. I’m excited to continue my journey here', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/phantom-x1' 
        },
         {   name: 'David Nwachukwu', 
            img: '/images/students/david1.png', 
            profile: "Redeemers University", 
            review: 'Enrolling in VNICOM is one of the best choices I have made this year. The instructors are very dedicated to making sure that each student understands what is being taught during class. So, if you are looking for a place to learn various tech skills, VNICOM is the place to be.', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/dave-codes101'
        },
         {   name: 'Daniel Ogbara', 
            img: '/images/students/daniel1.png', 
            profile: "Undergraduate", 
            review: 'vnicom tech hub is a great place to grow in tech. They provide quality training, practical sessions, and guidance that help student build real skill. The environment is friendly, supportive and focused on making you job-ready, a good choice for anyone interested in tech', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/ogbara01'
        },
          {   name: 'Fopefoluwa Alabi',
            img: '/images/students/fope1.png', 
            profile: "Afe Babalola University", 
            review: 'It is a great place to learn with efficient equipments for learning and knowledgeable Teachers', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/fopzyy23' 
        },
        {   name: 'Segun Soyemi', 
            img: '/images/students/segun1.png', 
            profile: "Undergraduate", 
            review: 'VNICOM tech hub has helped me navigate my path in front-end web development', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/kira516' 
        },
        {
            name: 'John Omotoyinbo', 
            img: '/images/students/bolu1.png', 
            profile: "Olabisi Onabanjo University", 
            review: 'Its been amazing so far. Amazing people!', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/'
        },
        {   name: 'Joshua Bolanle', 
            img: '/images/students/joshua1.png', 
            profile: "Mountaintop University", 
            review: 'Was able to practically learn more about HTML and CSS and more course', 
            // linkedin:'https://www.linkedin.com/in' , 
            github:'https://github.com/joshua1233345'
        },
        {   name: 'Ogundiran Muiz', 
            img: '/images/students/muiz1.png', 
            profile: "Federal University Of Agriculture", 
            review: 'It’s easy to learn with Vnicom tech hub, I really want to appreciate their effort in the computer science world , Thank You !', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/nimatelo' 
        },
        {   name: 'AbdulMalik Idowu', 
            img: '/images/students/malik1.png', 
            profile: "Gateway ICT Polytechnic", 
            review: 'Vnicom tech hub has all the resources for learning down from front end web development to back-end.They offer quality services.', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/malikidowu' 
        },
        {   name: 'Dorcas Akinyemi', 
            img: '/images/students/dorcas.png', 
            profile: "Fashion Designer", 
            review: 'Great learning environment with lovely tutors.', 
            // linkedin:'https://www.linkedin.com/in' , 
            github:'#' 
        },
        {   name: 'Samuel Boluwatife', 
            img: '/images/students/samuel1.png', 
            profile: "Joseph Ayo Babalola University", 
            review: 'vnicom tech hub offers quality services', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/Samuelboluwatife' 
        },
        {   name: 'Oladapo', 
            img: '/images/students/oladapo1.png', 
            profile: "Bowen University", 
            review: 'My training experience with Vnicom Tech Hub was informative and valuable.', 
            // linkedin: 'https://www.linkedin.com/in', 
            github: 'https://github.com/OladapoAdu',
        },
        {   name: 'Fiyinfoluwa Alabi',
            img: '/images/students/fiyin1.png', 
            profile: "Covenant University", 
            review: 'It is a nice place to learn and friendly environment', 
            // linkedin: 'https://www.linkedin.com/in', 
            github:'https://github.com/fiyinfoluwa123' 
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





    