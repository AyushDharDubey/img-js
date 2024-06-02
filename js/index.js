document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.querySelector('#userTable tbody');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    let currentPage = 1;
    let totalPages = 1;

    const fetchUsers = async (page = 1) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`);
            const data = await response.json();

            userTableBody.innerHTML = '';

            totalPages = data.total_pages;

            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${user.avatar}" alt="${user.first_name}" width="50" height="50"></td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                `;
                userTableBody.appendChild(row);
            });

            pageInfo.textContent = `Page ${page}`;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchUsers(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchUsers(currentPage);
        }
    });

    fetchUsers(currentPage);
});
