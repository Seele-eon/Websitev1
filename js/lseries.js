const textList = ['2', '3', '4', '.', '..', '...', 'F', 'Final','Final-1'];

const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 1100);
