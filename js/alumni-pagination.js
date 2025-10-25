
// ALUMNI AND INNER PAGES GRID PAGINATION
document.addEventListener("DOMContentLoaded", () => {
    const alumni = [
        { name: "Kayode Josephine", 
          role: "Product Designer at Vnicom Solutions", 
          img: "/images/students/josephine.png", 
          link: "/stories/josephine-kayode.html" 
        },
        { name: "Mayowa Oyeniran", 
          role: "Application Developer at Nova Bank", 
          img: "/images/students/mayowa.png", 
          link: "/stories/mayowa-oyeniran.html" 
        },
         { name: "Daniel Bolarinwa", 
          role: "UI/UX Tutor at Vnicom Tech Hub", 
          img: "/images/students/daniel2.png", 
          link: "/stories/daniel-bolarinwa.html" 
        },
        
        { name: "Oladunjoye Feranmi", 
          role: "Fullstack Developer at Vnicom Solutions", 
          img: "/images/students/feranmi.png", 
          link: "/stories/feranmi-oladunjoye.html" 
        },
        { name: "Eniiyi Heritage", 
          role: "Works at Zenith Bank", 
          img: "/images/students/Eniyii.png", 
          link: "/stories/eniiyi-heritage.html" 
        },
        { name: "Fatai Balikis Opeyemi", 
          role: "UI/UX Designer at Pacer Lab", 
          img: "/images/students/balikis.png", 
          link: "/stories/opeyemi-balikis.html" 
        },
        { name: "Osaranmaye Tomiwa", 
          role: "Frontend Developer", 
          img: "/images/students/tomiwa.png", 
          link: "/stories/osaranmaye-tomiwa.html" 
        },

        { name: "Rohaenat Eniola", 
          role: "Product Designer", 
          img: "/images/students/roheenat.png", 
          link: "/stories/rohaenat-eniola.html" 
        },
        { name: "Vincent Lawal", 
          role: "Data Scientist", 
          img: "/images/students/vincent.png", 
          link: "/stories/vincent-lawal.html" 
        },
         { name: "Ayodele Blessing", 
          role: "Mobile App Developer", 
          img: "/images/students/blessing.png", 
          link: "/stories/ayodele-blessing.html" 
        },
        { name: "Ogunrinlade Olalekan", 
          role: "Fullstack Developer", 
          img: "/images/students/olalekan.png", 
          link: "/stories/olalekan-ogunrinlade.html" 
        },
         { name: "Babalola James", 
          role: "Fullstack Developer", 
          img: "/images/students/james.png", 
          link: "/stories/babalola-james.html" 
        },
        { name: "Obajuluwa Anyinoluwa", 
          role: "Frontend Developer", 
          img: "/images/students/anyin.png", 
          link: "#" 
        },
        { name: "Ojukwo Daniel", 
          role: "Fullstack Developer", 
          img: "/images/students/chinaza.png", 
          link: "#" 
        },
        { name: "Ihinmikalu Deborah-", 
          role: "Frontend Developer", 
          img: "/images/students/deborah.png", 
          link: "#" 
        },
        { name: "Iluobe Goodluck", 
          role: "Frontend Developer", 
          img: "/images/students/goodluck.png", 
          link: "#" 
        },
        { name: "Adeniyi Idris", 
          role: "Fullstack Developer", 
          img: "/images/students/idris.png", 
          link: "#" 
        },
        { name: "Ogor Joy", 
          role: "Fullstack Developer", 
          img: "/images/students/ogor.png", 
          link: "#" 
        },
        { name: "Fadodu Moses", 
          role: "Product Designer", 
          img: "/images/students/moses.png", 
          link: "#" 
        },
        { name: "Jonathan Prosper", 
          role: "Fullstack Developer", 
          img: "/images/students/prosper.png", 
          link: "#" 
        },
        { name: "Samuel Mofopefoluwa", 
          role: "Fullstack Developer", 
          img: "/images/students/samuel.png", 
          link: "#" 
        },
        { name: "Olukoga Subomi", 
          role: "Frontend Developer", 
          img: "/images/students/subomi.png", 
          link: "#" 
        },
        { name: "Ekele ThankGod", 
          role: "Frontend Developer", 
          img: "/images/students/thankGod.png", 
          link: "#" 
        },
        { name: "Ajewole Tofunmi", 
          role: "Fullstack Developer", 
          img: "/images/students/tofunmi.png", 
          link: "#" 
        },
       
      
        // Add the rest of your alumni here...
    ];

const itemsPerPage = 8;
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
        <a href="${a.link}">
          <img src="${a.img}" alt="${a.name}">
        </a>
       
      </div>
      <div class="grid-content">
        <h4>${a.name}</h4>
        <p>${a.role}</p>
        <a class="view-quote-btn" href="${a.link}">View Story</a>
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





    