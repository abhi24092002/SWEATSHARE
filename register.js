document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (name && surname && email && password && dob && gender) {
        console.log("Name: " + name);
        console.log("Surname: " + surname);
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Date of Birth: " + dob);
        console.log("Gender: " + gender);
        
        alert("Registration successful!");
    } else {
        alert("Please fill out all fields.");
    }
});
