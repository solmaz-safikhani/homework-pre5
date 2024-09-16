const fs = require('fs'); 

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const users = JSON.parse(data); 
    
    function login(username, password) {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            return user;  
        } else {
            return 'emaile eror';  
        }
    }
    const args = process.argv.slice(2); 
    const inputUsername = args[0]; 
    const inputPassword = args[1];
    const result = login(inputUsername, inputPassword);
    console.log(result); 
});



//q3