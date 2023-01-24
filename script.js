const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
  
  // if (colorIndex < 2) {
  //   colorIndex++;
  // } else {
  //   colorIndex = 0;
  // }
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}
const turnOn =  {
  'red':       () => img.src = './img/vermelho.png',
  'yellow':    () => img.src = './img/amarelo.png',
  'green':     () => img.src = './img/verde.png',
  'automatic': () => setInterval(changeColor, 1000)
}

const trafficLight = (event) => {
 turnOn[event.target.id]();  //Através do target ele chama a string do ID do objeto
}

buttons.addEventListener('click', trafficLight);