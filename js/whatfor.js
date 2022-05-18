var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const textList = [" You gotta close the tab", "For real...", "I can't close the tab for you."];
const outButton = document.querySelector('.btn-outline-secondary');
const textToChange = document.querySelector('#textToChange');

outButton.addEventListener('click', function handleClick(){

  for (let i = 0; i < textList.length; i++) {
  setTimeout(function timer() {
    textToChange.innerHTML = textList[i];
  }, 1300*i);
}
})
