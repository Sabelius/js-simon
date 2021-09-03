let numbersList = [];
let numbersPromptList = [];
let numbers;
let randomNumbers = 5;


function getRandomNumbers(random) {
    let array = [];
    while (array.length < random) {
      randomNumbers = Math.floor(Math.random() * 100) + 1;
      if (array.indexOf(randomNumbers) === -1) {
        array.push(randomNumbers);
      }
    }
    return array;
}


numbersList = getRandomNumbers(randomNumbers);
alert("Numero randomico:" + " " + numbersList);


setTimeout(function () {
    for (i = 0; i < 5; i++) {
        numbers = parseInt(prompt("Prova ad indovinare i numeri:"));
        for (j = 0; j < numbersList.length; j++) {
            if (numbers == numbersList[j]) {
                numbersPromptList.push(numbers);
            } else if( isNaN(numbers)){
                alert("Non hai inserito un numero, conta come errore!!!")
                break;
            }
        }
    }
    alert("Hai indovinato " + numbersPromptList.length + " numero/i, ovvero: " + numbersPromptList)
}, 10000);






