

$(document).ready(function() {
    $('.carousel').carousel(
        {
            interval: 2000,
            loop: true
        }
    );
});

new WOW().init();


//   ----------------------------------------------------------------------------------------------------------

// Validate Appointment Form
function validateAppointmentForm() {
    // Reset error messages for the Appointment Form
    document.getElementById('patientNameError').style.display = 'none';
    document.getElementById('appointmentTypeError').style.display = 'none';
    document.getElementById('appointmentDateError').style.display = 'none';
    document.getElementById('appointmentTimeError').style.display = 'none';

    let isValid = true;

    // Validate Patient Name
    const patientName = document.getElementById('patientName').value.trim();
    if (!patientName) {
        document.getElementById('patientNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Appointment Type
    const appointmentType = document.getElementById('appointmentType').value.trim();
    if (!appointmentType) {
        document.getElementById('appointmentTypeError').style.display = 'block';
        isValid = false;
    }

    // Validate Appointment Date
    const appointmentDate = document.getElementById('appointmentDate').value.trim();
    if (!appointmentDate) {
        document.getElementById('appointmentDateError').style.display = 'block';
        isValid = false;
    }

    // Validate Appointment Time
    const appointmentTime = document.getElementById('appointmentTime').value.trim();
    if (!appointmentTime) {
        document.getElementById('appointmentTimeError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Validate Ambulance Form
function validateAmbulanceForm() {
    // Reset error messages for the Ambulance Form
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('ambulanceTypeError').style.display = 'none';
    document.getElementById('medicallyRiskyError').style.display = 'none';

    let isValid = true;

    // Validate Applicant Name
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

    // Validate Ambulance Type
    const ambulanceTypeSelected = document.querySelector('input[name="ambulanceType"]:checked');
    if (!ambulanceTypeSelected) {
        document.getElementById('ambulanceTypeError').style.display = 'block';
        isValid = false;
    }

    // Validate Medically Risky Group
    const medicallyRiskySelected = document.querySelector('input[name="medicallyRisky"]:checked');
    if (!medicallyRiskySelected) {
        document.getElementById('medicallyRiskyError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}




