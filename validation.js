document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    let isValid = true;

    function showError(inputElement, errorMessage) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = errorMessage;
      inputElement.classList.add('error-border');
    }

    function hideError(inputElement) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = '';
      inputElement.classList.remove('error-border');
    }

    // Name validation
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Please enter your name.');
      isValid = false;
    } else {
      hideError(nameInput);
    }

    // Phone validation
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      hideError(phoneInput);
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      hideError(emailInput);
    }

    // Comments validation
    const commentsInput = document.getElementById('comments');
    if (commentsInput.value.trim() === '') {
      showError(commentsInput, 'Please enter your comments.');
      isValid = false;
    } else {
      hideError(commentsInput);
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
