var form = document.getElementById("resume-form");
var output = document.getElementById("resume-output");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate Editable Resume
    output.innerHTML = "\n    <h2 contenteditable=\"true\">".concat(name, "</h2>\n    <p contenteditable=\"true\">Email: ").concat(email, "</p>\n    <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n    <p contenteditable=\"true\">LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n    <h3 contenteditable=\"true\">Education</h3>\n    <p contenteditable=\"true\">").concat(education.replace(/\n/g, "<br>"), "</p>\n    <h3 contenteditable=\"true\">Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience.replace(/\n/g, "<br>"), "</p>\n    <h3 contenteditable=\"true\">Skills</h3>\n    <p contenteditable=\"true\">").concat(skills.split(",").map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(", "), "</p>\n  ");
});
