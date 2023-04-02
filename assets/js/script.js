
const btnStart          = document.getElementById('start');
const btnReset          = document.getElementById('reset');
///////////////////////////////////////////////////////////////////////////
let givenRandomNumbers  = [];
let userDigitedNumbers  = [];
let correctAnwers       = [];
///////////////////////////////////////////////////////////////////////////
btnStart.addEventListener('click', function() {

    while (givenRandomNumbers.length < 5) {

        let randomNumber = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    
            console.log('numeri random -->', randomNumber);
    
        if (!givenRandomNumbers.includes(randomNumber)) {
            
            givenRandomNumbers.push(randomNumber);
    
            document.getElementById('output').innerHTML = `
            Osserva attentamente e memorizza i seguenti numeri: <br>
            <i class="fa-solid fa-hourglass-start fa-spin"></i> <br>
            ${givenRandomNumbers}
            `
        }
    }
    
    
    setTimeout(function() {
        document.getElementById('output').innerHTML = '';
    }, 5000);
    
    
    setTimeout(function() {
        
        for (let i = 0; i < 5; i++) {
            
            let digitNumbers = prompt('Inserisci i numeri che hai appena visualizzato');
    
            userDigitedNumbers.push(parseInt(digitNumbers));
        }
        
        for (let i = 0; i < givenRandomNumbers.length; i++) {
            
            if (userDigitedNumbers.includes(givenRandomNumbers[i])) {
    
                correctAnwers.push(givenRandomNumbers[i]);
            }
        }
    
        document.getElementById('output').innerHTML = `
        Ecco il tuo risultato: <br>
        <i class="fa-solid fa-down-long fa-bounce"></i> <br>
        Hai indovinato ${correctAnwers.length} numeri: ${correctAnwers}!
        `
    }, 5100);
})
///////////////////////////////////////////////////////////////////////////
btnReset.addEventListener('click', function() {
//TODO: programmare il pulsante
})
