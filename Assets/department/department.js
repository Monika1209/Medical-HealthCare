function validateForm() {
    // Reset all error messages
    resetErrors();

    let isValid = true;

    // Validate Applicant's Name (only letters and spaces allowed)
    const applicantName = document.getElementById('ApplicantName').value.trim();
    if (!applicantName || !/^[A-Za-z\s]+$/.test(applicantName)) {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    // Validate Phone Number 
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }

    // Validate Ambulance Type (Radio button selection)
    const ambulanceTypeSelected = document.querySelector('input[name="ambulanceType"]:checked');
    if (!ambulanceTypeSelected) {
      document.getElementById('ambulanceTypeError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Medically Risky Group (Radio button selection)
    const medicallyRiskySelected = document.querySelector('input[name="medicallyRisky"]:checked');
    if (!medicallyRiskySelected) {
      document.getElementById('medicallyRiskyError').style.display = 'block';
      isValid = false;
    }


    // If the form is valid, return true (submit the form)
    if (isValid) {
        alert("Form submitted successfully!");
      }

    return isValid; // If all fields are valid, the form will submit, otherwise, it prevents submission
}


function resetErrors() {
    // Reset all error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('ambulanceTypeError').style.display = 'none';
    document.getElementById('medicallyRiskyError').style.display = 'none';
}

// ----------------------------------------------------------------------------------------------------


// Example: Adding hover effect for latest posts
$(document).ready(function() {
    $('.latest-posts .post-item').hover(
        function () {
            $(this).addClass('text-primary');
        },
        function () {
            $(this).removeClass('text-primary');
        }
    );
});

// ----------------------------------------------------------------------------------------------------

