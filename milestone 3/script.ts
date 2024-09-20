// Get References to the form  and display area
const form=document.getElementById('Resume Form') as HTMLFormElement
const resumeDisplayElement=document.getElementById("resume-display") as HTMLDivElement

// handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    // Collection Input Values
    const name=(document.getElementById('name')as HTMLInputElement).value
    const lastName=(document.getElementById('Last Name')as HTMLInputElement).value
    const phoneNumber=(document.getElementById('Phone Number')as HTMLInputElement).value
    const email=(document.getElementById('Email')as HTMLInputElement).value
    const education=(document.getElementById('Education')as HTMLInputElement).value
    const experience=(document.getElementById('Experience')as HTMLInputElement).value
    const skill=(document.getElementById('Skill')as HTMLInputElement).value

    //Generate the Resume content dynamically

    const resumeHTML=`
    <h2><b>Resume</h2></b>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>last Name:</b>${lastName}</p>
    <p><b>Phone Number:</b>${phoneNumber}</p>
    <p><b>Email:</b>${email}</p>

    <h3>Education</h3> 
    <p>${education}</p>

    <h3>Experience</h3> 
    <p>${experience}</p>

    <h3>Skill</h3> 
    <p>${skill}</p>

    `;

    // Display The Generated Resume

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML=resumeHTML;
        
    }else{
        console.error('The Resume Element is Missing.')
    }
});