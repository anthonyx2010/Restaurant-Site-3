
var nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    phoneInput = document.getElementById("phone"),
    reasonInput = document.getElementById("reason"),
    additionalInput = document.getElementById("addInfo");

function validate () {

  var alertMsg = "";

  //  form of contact information
  if (!(nameInput.value && (emailInput.value || phoneInput.value))) {
    if (nameInput.value) alertMsg+="\u2022 Please include at least one way to contact you (either an email or phone number)\n\n";
    else if (emailInput.value || phoneInput.value) alertMsg+="\u2022 Please enter your name\n\n";
    else alertMsg+="\u2022 Make sure you have entered your name and atleast one way to contact you\n\n";
  }

  // Reason for Inquiry's dropdown
  if (reasonInput.value == "other" && !additionalInput.value) {
    alertMsg+="\u2022 (Other) Please explain your reason for inquiring in the Additional Information section\n\n";
  }

  // Best days to contact you must have at least one day checked
  var numChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (numChecked < 1) {
    alertMsg+="\u2022 Please select at least one day that is convenient to contact you\n\n";
  }

  if (alertMsg) {
    alert(alertMsg);
    return false;
  }
}
