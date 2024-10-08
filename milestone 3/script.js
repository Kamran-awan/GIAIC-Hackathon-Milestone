// Get References to the form  and display area
var form = document.getElementById('Resume Form');
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collection Input Values
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('Last Name').value;
    var phoneNumber = document.getElementById('Phone Number').value;
    var email = document.getElementById('Email').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skill = document.getElementById('Skill').value;
    //Generate the Resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</h2></b>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>last Name:</b>").concat(lastName, "</p>\n    <p><b>Phone Number:</b>").concat(phoneNumber, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n\n    <h3>Education</h3> \n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3> \n    <p>").concat(experience, "</p>\n\n    <h3>Skill</h3> \n    <p>").concat(skill, "</p>\n\n    ");
    // Display The Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Element is Missing.');
    }
});
