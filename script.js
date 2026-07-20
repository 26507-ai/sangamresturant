// Handle Table Reservation Form Submission
document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Form reload huna bata rokxa

    // Input values line
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const messageDiv = document.getElementById('form-message');

    // Display success message
    messageDiv.innerText = `Thank you, ${name}! Your table reservation for ${date} has been received.`;

    // Form reset garne
    document.getElementById('booking-form').reset();
});