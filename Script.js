window.onload = function() {
    //const myAmount = document.getElementById('#convertButton'); звертається для id

    const myAmount = document.querySelector("input[name='myAmount']");
    const myCurrency = document.querySelector("select[name='myCurrency']");
    const desiredCurrency = document.querySelector("select[name='desiredCurrency']");

    const myButton = document.getElementById('convertButton');
    const myResult = document.getElementById('myResult');

    function handleConvertCurrency() {

        let convertedResult;
        if (myCurrency.value === 'UAN' && desiredCurrency.value === 'EUR') {
            convertedResult = myAmount.value / 27;
        } else if (myCurrency.value === 'UAN' && desiredCurrency.value === 'USD') {
            convertedResult = myAmount.value / 24;
        } else if (myCurrency.value === 'EUR' && desiredCurrency.value === 'UAN') {
            convertedResult = myAmount.value * 27;
        } else if (myCurrency.value === 'USD' && desiredCurrency.value === 'UAN') {
            convertedResult = myAmount.value * 24;
        } else if (myCurrency.value === 'EUR' && desiredCurrency.value === 'USD') {
            convertedResult = myAmount.value * 1.1;
        } else if (myCurrency.value === 'USD' && desiredCurrency.value === 'EUR') {
            convertedResult = myAmount.value * 0.9;
        } else if (myCurrency.value === 'USD' && desiredCurrency.value === 'USD') {
            convertedResult = myAmount.value * 1;
        } else if (myCurrency.value === 'EUR' && desiredCurrency.value === 'EUR') {
            convertedResult = myAmount.value * 1;
        } else if (myCurrency.value === 'UAN' && desiredCurrency.value === 'UAN') {
            convertedResult = myAmount.value * 1;
        }

        myResult.innerHTML = convertedResult.toFixed(2);
        myResult.style.color = 'red';
    }
    myButton.addEventListener('click', handleConvertCurrency);
}