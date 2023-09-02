document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Perform form validation and submission here
      // Example code to display a success message
      var successMessage = document.createElement("p");
      successMessage.classList.add("success-message");
      successMessage.textContent = "Thank you for your enquiry. We will get back to you soon!";
      form.appendChild(successMessage);
    });
  });
  