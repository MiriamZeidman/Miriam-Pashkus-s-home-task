const addUser = () => {
    const formData = new FormData(document.getElementById('userForm'));

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = '../html/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}