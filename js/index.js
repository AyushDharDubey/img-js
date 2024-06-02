document.addEventListener('DOMContentLoaded', () => {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            const userTableBody = document.querySelector('#userTable tbody');
            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${user.avatar}" alt="${user.first_name}" width="50" height="50"></td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                `;
                userTableBody.appendChild(row);
            });
        });
});
