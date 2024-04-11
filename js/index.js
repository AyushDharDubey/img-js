fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        let userData = data.data;
        let tableBody = document.querySelector('#userData tbody');
        userData.forEach(user => {
            let row = document.createElement('tr');
            row.innerHTML = `
                    <td>${user.id}</td>
          <td><img src="${user.avatar}" alt="Avatar"></td>
          <td>${user.first_name} ${user.last_name}</td>
          <td>${user.email}</td>
        `;
            tableBody.appendChild(row);
        });
    });
