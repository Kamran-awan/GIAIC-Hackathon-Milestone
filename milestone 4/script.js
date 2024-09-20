// Get References to the form  and display area
var form = document.getElementById('Resume Form');
var resumeDisplayElement = document.getElementById("Resume Display");
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
    var resumeHTML = "\n    <h2><b>Editable Resume</h2></b>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>last Name:</b><span contenteditable=\"true\">").concat(lastName, "</span></p>\n    <p><b>Phone Number:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n    <p><b>Email:</b>").concat(email, "</p>\n\n    <h3>Education</h3> \n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3> \n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skill</h3> \n    <p contenteditable=\"true\">").concat(skill, "</p>\n\n    ");
    // Display The Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Element is Missing.');
    }
});
