// Function to handle feedback submission
function submitFeedback() {
    // Retrieve user input values from the form
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Display a thank you message after form submission
    alert('Thank you for your valuable feedback');

    // Display the user information in the User Information section
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;

    // Show the user information section and hide the form
    document.getElementById('userInfo').style.display = 'block';  // Show user info
    document.querySelector("form").style.display = "none";  // Hide the form
}

// Get the submit button element by its ID
const submitButton = document.getElementById('submitBtn');

// Assign the submitFeedback function to execute when the submit button is clicked
submitButton.onclick = submitFeedback;

// Add event listener for the 'Enter' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();  // Call submitFeedback when Enter is pressed
    }
});
