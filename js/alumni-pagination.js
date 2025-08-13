
// ALUMNI AND INNER PAGES GRID PAGINATION
document.addEventListener("DOMContentLoaded", () => {
    const alumni = [
        { name: "Josephine Taiwo Kayode", 
          role: "Product Designer at Vnicom Solutions", 
          img: "/images/students/josephine.jpg", 
          link: "/stories/josephine-kayode.html" 
        },
        { name: "Mayowa Oyeniran", 
          role: "Application Developer at Nova Bank", 
          img: "/images/students/mayowa.jpg", 
          link: "/stories/mayowa-oyeniran.html" 
        },
        { name: "Eniiyi Heritage", 
          role: "Works at Zenith Bank", 
          img: "/images/students/Eniiyi-2.jpeg", 
          link: "/stories/eniiyi-heritage.html" 
        },
        { name: "Gbenga Oladunjoye Feranmi", 
          role: "Fullstack Developer at Vnicom Solutions", 
          img: "/images/students/feranmi.jpeg", 
          link: "/stories/feranmi-oladunjoye.html" 
        },
        { name: "Daniel Bolarinwa", 
          role: "UI/UX Tutor at Vnicom Tech Hub", 
          img: "/images/students/daniel.png", 
          link: "/stories/daniel-bolarinwa.html" 
        },
        { name: "Fatai Balikis Opeyemi", 
          role: "UI/UX Designer at Pacer Lab", 
          img: "/images/students/balikis.jpg", 
          link: "/stories/opeyemi-balikis.html" 
        },
        { name: "Osaranmaye Tomiwa", 
          role: "Frontend Developer", 
          img: "/images/students/tomiwa.jpg", 
          link: "/stories/osaranmaye-tomiwa.html" 
        },
        { name: "Rohaenat Eniola", 
          role: "Product Designer", 
          img: "/images/students/roheenat.jpg", 
          link: "/stories/rohaenat-eniola.html" 
        },
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





    