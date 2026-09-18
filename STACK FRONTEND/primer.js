const boto = document.querySelector('#boto');
const missatge = document.querySelector('#missatge');

boto.addEventListener('click', function () {
    missatge.textContent = 'Has fet clic al botó!';
});
