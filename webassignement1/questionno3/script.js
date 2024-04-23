function createApplicationsTable(applications) {
  const table = document.getElementById("applicationsTable");
  const tbody = document.getElementById("applicationsTableBody");

  // Clear previous data from the table body
  tbody.innerHTML = "";

  // Create a row for the application
  const row = document.createElement("tr");

  // Add the application data as cells in the row
  const data = [
    applications.personalInformation ? `${applications.personalInformation.firstName || ''} ${applications.personalInformation.lastName || ''}` : '',
    applications.personalInformation ? applications.personalInformation.phoneNumber || '' : '',
    applications.personalInformation ? applications.personalInformation.emailAddress || '' : '',
    applications.personalInformation ? `${applications.personalInformation.street || ''}, ${applications.personalInformation.city || ''}, ${applications.personalInformation.state || ''}, ${applications.personalInformation.zipCode || ''}` : '',
    applications.resume || '',
    applications.coverLetter || '',
    applications.education ? `${applications.education.highestEducation || ''} - ${applications.education.school || ''}, ${applications.education.major || ''}, ${applications.education.graduationYear || ''}` : '',
    applications.employmentHistory ? `${applications.employmentHistory.jobTitle || ''} - ${applications.employmentHistory.companyName || ''}, ${applications.employmentHistory.employmentDates || ''}, ${applications.employmentHistory.jobResponsibilities || ''}` : '',
    Array.isArray(applications.skills) ? applications.skills.join(', ') : applications.skills || '',
    Array.isArray(applications.certifications) ? applications.certifications.join(', ') : applications.certifications || '',
    applications.availability ? `${applications.availability.startDate || ''}, ${applications.availability.preferredWorkSchedule || ''}, ${applications.availability.relocate || ''}` : '',
    applications.references ? `${applications.references.referenceName || ''}, ${applications.references.referenceContact || ''}, ${applications.references.relationship || ''}` : '',
    applications.additionalQuestions ? applications.additionalQuestions.whyWorkHere || '' : '',
    applications.consent ? (applications.consent.consent ? "Agreed to terms and conditions" : "") + ', ' + (applications.consent.privacyPolicy ? "Acknowledged privacy policy" : "") : '',
  ];

  // Create cells for each data item and append to the row
  data.forEach((item, i) => {
    const cell = document.createElement("td");
    cell.textContent = item;
    row.appendChild(cell);
  });

  // Append the row to the table body
  tbody.appendChild(row);

  // Show the table
  table.style.display = "table";
}


  
function submitApplication(event) {
    event.preventDefault();
  
    // Validate form fields
    const firstName = document.getElementById('firstName').value;
    console.log(firstName);
    const lastName = document.getElementById('lastName').value;
    console.log(lastName)
    const phoneNumber = document.getElementById('phoneNumber').value;
    console.log(phoneNumber);
    const emailAddress = document.getElementById('emailAddress').value;
    console.log(emailAddress);
    const street = document.getElementById('street').value;
    console.log(street);
    const city = document.getElementById('city').value;
    console.log(city);
    const state = document.getElementById('state').value;
    console.log(state);
    const zipCode = document.getElementById('zipCode').value;
    console.log(zipCode);
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
    createApplicationsTable(applicationData);
}

form = document.getElementById('applicationForm');
form.addEventListener('submit', submitApplication);



