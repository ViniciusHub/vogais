const $scoreboardVogal = document.querySelector('.scoreboard-vogal');
const $inputVogalCheck = document.querySelector('.input-vogal-check');
const $submitVogalCheck = document.querySelector('.submit-vogal-check');

const vogais = ['a','e','i','o','u','A','E','I','O','U'];



let pontuacaoVogal = 0;
let texto = '';

function contaVogais(frase){

    for(const letter of frase){

        for(const vogal of vogais){

            if(vogal == letter){

                pontuacaoVogal += 1;

            }

        }

    }

}

function resultadoVogais(){

    if(pontuacaoVogal < 10){

        $scoreboardVogal.innerHTML = '0' + pontuacaoVogal;
        pontuacaoVogal = 0;

    }else{

        $scoreboardVogal.innerHTML = pontuacaoVogal;
        pontuacaoVogal = 0;

    }

}


$submitVogalCheck.addEventListener('click', function () {

    texto = $inputVogalCheck.value;
    contaVogais(texto)
    resultadoVogais()

})