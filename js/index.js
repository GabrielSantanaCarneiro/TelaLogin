function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassowrd = document.getElementById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassowrd.type = 'text';

    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassowrd.type = 'password';
    }
}