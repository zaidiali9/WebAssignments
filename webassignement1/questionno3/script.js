function createApplicationsTable() {
    const table = document.getElementById("applicationsTable");
    const tbody = document.getElementById("applicationsTableBody");
  
    // Clear previous data from the table body
    tbody.innerHTML = "";
  
    // Create a row for each application
    applications.forEach((application, index) => {
      const row = document.createElement("tr");
  
      // Add the application data as cells in the row
      const data = [
        `${application.personalInformation.firstName} ${application.personalInformation.lastName}`,
        application.personalInformation.phoneNumber,
        application.personalInformation.emailAddress,
        `${application.personalInformation.street}, ${application.personalInformation.city}, ${application.personalInformation.state}, ${application.personalInformation.zipCode}`,
        application.resume,
        application.coverLetter,
        `${application.education.highestEducation} - ${application.education.school}, ${application.education.major}, ${application.education.graduationYear}`,
        `${application.employmentHistory.jobTitle} - ${application.employmentHistory.companyName}, ${application.employmentHistory.employmentDates}, ${application.employmentHistory.jobResponsibilities}`,
        `${application.skills}, ${application.certifications}`,
        `${application.availability.startDate}, ${application.availability.preferredWorkSchedule}, ${application.availability.relocate}`,
        `${application.references.referenceName}, ${application.references.referenceContact}, ${application.references.relationship}`,
        application.additionalQuestions.whyWorkHere,
        `${application.consent.consent ? "Agreed to terms and conditions" : ""}, ${application.consent.privacyPolicy ? "Acknowledged privacy policy" : ""}`,
      ];
  
      data.forEach((item, i) => {
        const cell = document.createElement("td");
        cell.textContent = item;
        row.appendChild(cell);
      });
  
      tbody.appendChild(row);
    });
  
    // Show the table
    table.style.display = "table";
  }
  
function submitApplication(event) {
    event.preventDefault();
  
    // Validate form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const resume = document.getElementById('resume').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const highestEducation = document.getElementById('highestEducation').value;
    const school = document.getElementById('school').value;
    const major = document.getElementById('major').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const employmentDates = document.getElementById('employmentDates').value;
    const jobResponsibilities = document.getElementById('jobResponsibilities').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;
    const startDate = document.getElementById('startDate').value;
    const preferredWorkSchedule = document.getElementById('preferredWorkSchedule').value;
    const relocate = document.getElementById('relocate').checked;
    const referenceName = document.getElementById('referenceName').value;
    const referenceContact = document.getElementById('referenceContact').value;
    const relationship = document.getElementById('relationship').value;
    const whyWorkHere = document.getElementById('whyWorkHere').value;
    const consent = document.getElementById('consent').checked;
    const privacyPolicy = document.getElementById('privacyPolicy').checked;
  
    if (!firstName || !lastName || !phoneNumber || !emailAddress || !street || !city || !state || !zipCode || !resume || !coverLetter || !highestEducation || !school || !major || !graduationYear || !jobTitle || !companyName || !employmentDates || !jobResponsibilities || !skills || !certifications || !startDate || !preferredWorkSchedule || !referenceName || !referenceContact || !relationship || !whyWorkHere || !consent || !privacyPolicy) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Construct application object
    const applicationData = {
      personalInformation: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        street,
        city,
        state,
        zipCode,
      },
      resume,
      coverLetter,
      education: {
        highestEducation,
        school,
        major,
        graduationYear,
      },
      employmentHistory: {
        jobTitle,
        companyName,
        employmentDates,
        jobResponsibilities,
      },
      skills,
      certifications,
      availability: {
        startDate,
        preferredWorkSchedule,
        relocate,
      },
      references: {
        referenceName,
        referenceContact,
        relationship,
      },
      additionalQuestions: {
        whyWorkHere,
      },
      consent: {
        consent,
        privacyPolicy,
      },
    };
  
    console.log('Application submitted:', applicationData);
    createApplicationsTable();
}

form = document.getElementById('applicationForm');
form.addEventListener('submit', submitApplication);



