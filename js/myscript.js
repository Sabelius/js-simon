let numbersList = [];
let numbersPromptList = [];
let numbers;

function getRandomNumber(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(i = 0; i < 5; i++){
    numbersList.push(getRandomNumber(1, 100));
}
alert("Numeri randomici:" + " " + numbersList);



setTimeout(function () {
    for (i = 0; i < 5; i++) {
        numbers = parseInt(prompt("Prova ad indovinare i numeri:"));

        for (j = 0; j < numbersList.length; j++) {
            if (numbers == numbersList[j]) {
                numbersPromptList.push(numbers);
            }
        }
    }
    alert("Hai indovinato " + numbersPromptList.length + " numero/i, ovvero: " + numbersPromptList)
}, 10000);






