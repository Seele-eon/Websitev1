var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const outButton = document.querySelector('.btn-outline-secondary');
const textToChange = document.querySelector('#textToChange');

outButton.addEventListener('click', function handleClick(){
  textToChange.textContent = "You gotta close the tab."
})
