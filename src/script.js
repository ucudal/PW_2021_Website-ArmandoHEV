const Submit = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || message === ''){
        console.log('Error: Llenar todos los campos')
    } else {
        console.log(name, email, message)
    }
}