const skills = [
  { tech: "HTML", logo: "../img/HTML.png" },
  { tech: "CSS", logo: "../img/CSS.png" },
  { tech: "JAVASCRIPT", logo: "../img/JAVASCRIPT.png" },
  { tech: "REACT", logo: "../img/REACT.png" },
  { tech: "MYSQL", logo: "../img/MYSQL.png" },
  { tech: "LINUX", logo: "../img/LINUX.png" },
  { tech: "NODEJS", logo: "../img/node.png" },
  { tech: "Adobe Illustrator", logo: "../img/illustrator.png" },
];
// if i further want to add a skill, i just need to add it to the skills array

const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  const logoImg = document.createElement("img");
  logoImg.src = skill.logo;
  logoImg.alt = `${skill.tech} Logo`;

  skillDiv.appendChild(logoImg);

  const techSpan = document.createElement("span");
  techSpan.textContent = skill.tech;
  techSpan.className = "tech-name";

  skillDiv.appendChild(techSpan);

  skillsContainer.appendChild(skillDiv);
});

function updateFooter() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();
  const footerYear = document.getElementById("current-year");
  const footerDate = document.getElementById("current-date");
  const footerCounter = document.getElementById("time-counter");

  footerYear.textContent = currentYear;
  footerDate.textContent = currentDate;

  // Time counter
  let startTime = new Date().getTime();
  setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor(elapsedTime / 1000);
    footerCounter.textContent = `Site uptime: ${seconds} seconds`;
  }, 1000);
}

window.onload = updateFooter;

// spinner
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const spinnerContainer = document.getElementById("spinner-container");
    if (spinnerContainer) {
      spinnerContainer.style.display = "none";
    }
  }, 1000);
});

// Scrolling fix
document.querySelectorAll(".nav-list a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 110,
        behavior: "smooth",
      });
    }
  });
});
