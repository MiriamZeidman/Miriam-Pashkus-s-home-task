document.addEventListener('DOMContentLoaded', async function () {
    await fetchUsers();
});
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const usersTableBody = document.getElementById('usersTableBody');

        // Clear any existing content in the table body
        usersTableBody.innerHTML = '';

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.id}</td>
                <td><a href="more-details.html?id=${user.id}">more details>></a></td>
                <td><button class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button></td>

            `;
            usersTableBody.appendChild(tr);
        });

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
async function deleteUser(userId) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
            method: 'DELETE'
        });

        if (response.ok)
            await fetchUsers();
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}
