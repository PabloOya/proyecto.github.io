function calcularEdad() {
    const birthdate = document.getElementById('birthdate').value;
        if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
age--;
}

document.getElementById('result').innerText = `Tu edad es ${age} años.`;
} else {
document.getElementById('result').innerText = 'Por favor, ingrese una fecha de nacimiento válida.';
}
}