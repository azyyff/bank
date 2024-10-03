function login() {
    const accountnumber = document.getElementById('accno');
    const userpassword = document.getElementById('userpassword');

    let details = {
        accountnumber: accountnumber.value,  // Fixed variable reference
        password: userpassword.value,
    };

    // Check if account exists in localStorage
    const storedUser = localStorage.getItem(details.accountnumber);

    if (!storedUser) {
        alert('Invalid account number');
    } 
    else {
        const userData = JSON.parse(storedUser);
        
        // Validate password
        if (userData.password === details.password) {
            alert('Login successful');
            accountnumber.classList.remove('red-placeholder');  // Fixed variable reference
            window.location.href = './servic.html';
            userpassword.style.borderColor = 'green';
            userpassword.classList.remove('red-placeholder');  // Remove red-placeholder class
            
        } 
        else {
            alert('Invalid password');
            userpassword.style.borderColor = 'red';
            userpassword.placeholder = 'Incorrect password';
            userpassword.classList.add('red-placeholder');
        }
    }
}
