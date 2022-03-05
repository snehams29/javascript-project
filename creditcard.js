let attemptsCounter = 0;

const luhnAlgorithm = (ccNumber) => {
    const length = ccNumber.length;
    let count = 0;

 
    for(let i = 0; i < length; i++) {
        let currentDigit = parseInt(ccNumber[i]);

        if ( (i+2) % 2 === 0)
            if((currentDigit *= 2) > 9)
                currentDigit -= 9;
        
        count += currentDigit;
    }

    return (count % 10) === 0;
}

const checkCC = () => {
    const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    const elAttempts = document.getElementById('attempts');
    let message = "";

    if( luhnAlgorithm(elCCNumber.value) )
        message = "Well, it looks like that worked! Your CC is valid!";
    else
        message = "Credit card verficaton failed";
    
    elCCValidation.textContent = message;
    elCCNumber.value = null;

    elAttempts.textContent = ++attemptsCounter;
};