const form = document.getElementById("resume-form") as HTMLFormElement;
const output = document.getElementById("resume-output") as HTMLElement;

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate Editable Resume
  output.innerHTML = `
    <h2 contenteditable="true">${name}</h2>
    <p contenteditable="true">Email: ${email}</p>
    <p contenteditable="true">Phone: ${phone}</p>
    <p contenteditable="true">LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <h3 contenteditable="true">Education</h3>
    <p contenteditable="true">${education.replace(/\n/g, "<br>")}</p>
    <h3 contenteditable="true">Work Experience</h3>
    <p contenteditable="true">${experience.replace(/\n/g, "<br>")}</p>
    <h3 contenteditable="true">Skills</h3>
    <p contenteditable="true">${skills.split(",").map(skill => `<span>${skill.trim()}</span>`).join(", ")}</p>
  `;
});
