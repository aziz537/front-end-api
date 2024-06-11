document.getElementById('fetch-users').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.results);
        })
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; // Clear previous users

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.location.city}, ${user.location.country}</p>
        `;

        userContainer.appendChild(userCard);
    });
}
