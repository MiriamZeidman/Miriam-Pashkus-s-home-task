document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Extract user ID from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');

        // Fetch user details from the server
        const userResponse = await fetch(`http://localhost:3000/users/${userId}`);
        const userData = await userResponse.json();

        // const coronaResponse = await fetch(`http://localhost:3000/coronaDetails/${userId}`);
        // const coronaData = await coronaResponse.json();

        const userDetailsDiv = document.getElementById('userDetails');

        let userDetailsHTML ='<ul>';
        for (const [key, value] of Object.entries(userData)) {
            if (key !== '_id' && key !== '__v') {
                userDetailsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            }
        }
        userDetailsHTML += '</ul>';

        userDetailsDiv.innerHTML = userDetailsHTML;

        // const coronaDetailsDiv = document.getElementById('coronaDetails');

        // let coronaDetailsHTML ='<ul>';

        // for (const [key, value] of Object.entries(coronaData)) {
        //     coronaDetailsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
        // }
        // coronaDetailsHTML += '</ul>';

        // coronaDetailsDiv.innerHTML = coronaDetailsHTML;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
});
