// Interface to structure the form data
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  education: string;
  experience: string;
  skills: string;
}

// Function to capture form data and generate resume
function generateResume(): void {
  // Get form data from the HTML elements
  const name = (document.getElementById("name") as HTMLInputElement)?.value;
  const email = (document.getElementById("email") as HTMLInputElement)?.value;
  const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
  const profilePictureInput = document.getElementById(
    "profilePicture"
  ) as HTMLInputElement;

  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  )?.value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  )?.value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    ?.value;

  // Validate if all the fields are filled
  if (!name || !email || !phone || !education || !experience || !skills) {
    alert("Please fill in all fields!");
    return;
  }

  // Create an object based on the interface
  const resumeData: ResumeData = {
    name: name,
    email: email,
    phone: phone,
    profilePicture: "",
    education: education,
    experience: experience,
    skills: skills,
  };

  // Handle profile picture
  const profilePictureFile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePictureFile
    ? URL.createObjectURL(profilePictureFile)
    : "";

  // Display the resume in the "resumeOutput" div
  const resumeOutputDiv = document.getElementById("resumeOutput");

  if (resumeOutputDiv) {
    resumeOutputDiv.innerHTML = `
      <h2>Generated Resume</h2>
      <p><strong>Name:</strong> <span id="editableName" contenteditable="true">${
        resumeData.name
      }</span></p>
      <p><strong>Email:</strong> <span id="editableEmail" contenteditable="true">${
        resumeData.email
      }</span></p>
      <p><strong>Phone:</strong> <span id="editablePhone" contenteditable="true">${
        resumeData.phone
      }</span></p>
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" class="profilePicture" alt="Profile Picture" />`
          : ""
      }
      <p><strong>Education:</strong> <span id="editableEducation" contenteditable="true">${
        resumeData.education
      }</span></p>
      <p><strong>Experience:</strong> <span id="editableExperience" contenteditable="true">${
        resumeData.experience
      }</span></p>
      <p><strong>Skills:</strong> <span id="editableSkills" contenteditable="true">${
        resumeData.skills
      }</span></p>
    `;
  }
}

// Event listener to handle form submission
document.getElementById("resumeForm")?.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page
  generateResume(); // Call the resume generation function
});
