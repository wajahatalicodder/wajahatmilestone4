var _a;
// Function to capture form data and generate resume
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g;
    // Get form data from the HTML elements
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value;
    var profilePictureInput = document.getElementById("profilePicture");
    var education = (_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value;
    var experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value;
    var skills = (_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value;
    // Validate if all the fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields!");
        return;
    }
    // Create an object based on the interface
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        profilePicture: "",
        education: education,
        experience: experience,
        skills: skills,
    };
    // Handle profile picture
    var profilePictureFile = (_g = profilePictureInput.files) === null || _g === void 0 ? void 0 : _g[0];
    var profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";
    // Display the resume in the "resumeOutput" div
    var resumeOutputDiv = document.getElementById("resumeOutput");
    if (resumeOutputDiv) {
        resumeOutputDiv.innerHTML = "\n      <h2>Generated Resume</h2>\n      <p><strong>Name:</strong> <span id=\"editableName\" contenteditable=\"true\">".concat(resumeData.name, "</span></p>\n      <p><strong>Email:</strong> <span id=\"editableEmail\" contenteditable=\"true\">").concat(resumeData.email, "</span></p>\n      <p><strong>Phone:</strong> <span id=\"editablePhone\" contenteditable=\"true\">").concat(resumeData.phone, "</span></p>\n      ").concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" class=\"profilePicture\" alt=\"Profile Picture\" />")
            : "", "\n      <p><strong>Education:</strong> <span id=\"editableEducation\" contenteditable=\"true\">").concat(resumeData.education, "</span></p>\n      <p><strong>Experience:</strong> <span id=\"editableExperience\" contenteditable=\"true\">").concat(resumeData.experience, "</span></p>\n      <p><strong>Skills:</strong> <span id=\"editableSkills\" contenteditable=\"true\">").concat(resumeData.skills, "</span></p>\n    ");
    }
}
// Event listener to handle form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    generateResume(); // Call the resume generation function
});
