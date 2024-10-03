function register() {
    // Get the input elements
    const username = document.getElementById('username');
    const usernumber = document.getElementById('usernumber');
    const userpassword = document.getElementById('userpassword');


    

    // Create user object
    const users = {
        user: username.value,
        account: usernumber.value,
        password: userpassword.value,
    };

    // Validate if the username already exists in localStorage
    if (localStorage.getItem(users.user)) {
        alert('User details already exist');
    } 
    // Ensure input fields are not empty and password length is valid
    else if (users.user.length > 0 && users.account.length > 0 && users.password.length >= 4) {
        alert("Registered successfully");
        window.location='./login.html'

        localStorage.setItem(users.user, JSON.stringify(users));
    } 
    else {
        // Handle empty username
        if (users.user.length === 0) {
            username.placeholder = 'Username is required';
            username.classList.add('red-placeholder');
            username.style.borderColor = 'red';
        } else {
            username.style.borderColor = 'blue';
        }

        // Handle empty account number
        if (users.account.length === 0) {
            usernumber.placeholder = 'Account number is required';
            usernumber.classList.add('red-placeholder');
            usernumber.style.borderColor = 'red';
        } else {
            usernumber.style.borderColor = 'green';
        }

        // Handle password length validation
        if (users.password.length < 4) {
            userpassword.placeholder = 'Password must be at least 4 characters';
            userpassword.classList.add('red-placeholder');
            userpassword.style.borderColor = 'red';
        } else {
            userpassword.style.borderColor = 'yellow';
        }
    }
}

// function login() {
//     const accountnumber = document.getElementById('accno');
//     const userpassword = document.getElementById('userpassword');

//     let details = {
//         accountnumber: accountnumber.value,  // Fixed variable reference
//         password: userpassword.value,
//     };

//     // Check if account exists in localStorage
//     const storedUser = localStorage.getItem(details.accountnumber);

//     if (!storedUser) {
//         alert('Invalid account number');
//     } 
//     else {
//         const userData = JSON.parse(storedUser);
        
//         // Validate password
//         if (userData.password === details.password) {
//             alert('Login successful');
//             accountnumber.classList.remove('red-placeholder');  // Fixed variable reference
//             userpassword.style.borderColor = 'green';
//             userpassword.classList.remove('red-placeholder');  // Remove red-placeholder class
//             window.location = './servic.html';
//         } 
//         else {
//             alert('Invalid password');
//             userpassword.style.borderColor = 'red';
//             userpassword.placeholder = 'Incorrect password';
//             userpassword.classList.add('red-placeholder');
//         }
//     }
// }
