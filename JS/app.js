// Your skills array
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

 
const skillsContainer = document.getElementById("skills-container");

 
skills.forEach((skill) => {
 
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  // Create an image element for the logo
  const logoImg = document.createElement("img");
  logoImg.src = skill.logo;
  logoImg.alt = `${skill.tech} Logo`;

  // Append the logo to the skill div
  skillDiv.appendChild(logoImg);

  // Create a span for the tech name
  const techSpan = document.createElement("span");
  techSpan.textContent = skill.tech;
  techSpan.className = "tech-name";

  // Append the tech name to the skill div
  skillDiv.appendChild(techSpan);

  // Append the skill div to the skills container
  skillsContainer.appendChild(skillDiv);
});
