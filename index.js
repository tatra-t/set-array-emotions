
let arr = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
let text = document.querySelector('.text');
let button = document.querySelector('.button');
let arrayWrite = document.querySelector('.array');
let setWrite = document.querySelector('.set');
let emotionSet = new Set();
let emotionArray = [];


text.value = arr[getRandomInt(7)];


function addEmotions() {
    emotionSet.add(text.value); 
    emotionArray.push(text.value);
    console.log(emotionSet, emotionArray);
    arrayWrite.innerHTML = `${emotionArray}`;
    setWrite.innerHTML = `${Array.from(emotionSet)}`;
    text.value = arr[getRandomInt(7)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



button.addEventListener('click', addEmotions)

