var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const textList = [" You gotta close the tab", "For real...", "I can't close the tab for you."];
const outButton = document.querySelector('.btn-outline-secondary');
const textToChange = document.querySelector('#textToChange');
const whatforgif1 = document.querySelector('#whatforgif1');
const whatforimg1 = document.querySelector('#whatforimg1');
const whatforgif2 = document.querySelector('#whatforgif2');
const whatforimg2 = document.querySelector('#whatforimg2');
const whatforgif3 = document.querySelector('#whatforgif3');
const whatforimg3 = document.querySelector('#whatforimg3');
outButton.addEventListener('click', function handleClick(){

  for (let i = 0; i < textList.length; i++) {
  setTimeout(function timer() {
    textToChange.innerHTML = textList[i];
  }, 1270*i);
}
})

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function initiateGif(el1, el2){
    el1.classList.add("hidden");
    el2.classList.remove("hidden");
}

document.body.addEventListener("scroll", function handleScroll(){
    if(isScrolledIntoView(whatforimg1) && whatforgif1.classList.contains("hidden")){
      initiateGif(whatforimg1, whatforgif1);
    }

    if(isScrolledIntoView(whatforimg2) && whatforgif2.classList.contains("hidden")){
      initiateGif(whatforimg2, whatforgif2);
    }

    if(isScrolledIntoView(whatforimg3) && whatforgif3.classList.contains("hidden")){
      initiateGif(whatforimg3, whatforgif3);
    }
});
