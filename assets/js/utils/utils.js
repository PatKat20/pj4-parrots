let segundos = 0
const cronometro = setInterval(() =>{
    segundos++
    timer(segundos)
}, 1000)

function timer(sec){
    document.getElementById("timer").innerHTML = `Timer: ${sec}`
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export { shuffleArray , cronometro, segundos }