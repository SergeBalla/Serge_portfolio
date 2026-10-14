function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}


const form = document.querySelector("#Myform");
const successMessage = document.querySelector("#successMessage");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            // Show success message
            successMessage.style.display = 'block';
            // Reset the form
            form.reset();
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});