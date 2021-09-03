let numbersList = [];


function getRandomNumber(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(i = 0; i < 5; i++){
    numbersList.push(getRandomNumber(1, 100));
    alert("Numero randomico:" + " " + numbersList);
}

numbers = myFunction();

function myFunction(){
    setTimeout(function(){
        for(i = 0; i < 5; i++){
            parseInt(prompt("Prova ad indovinare i numeri:"));
        }
    },3000);
}


