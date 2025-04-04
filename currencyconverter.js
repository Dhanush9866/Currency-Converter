function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

 
    let exchangeRates = {
        "USD": { "USD": 1, "EUR": 0.91, "GBP": 0.76, "INR": 83.10 },
        "EUR": { "USD": 1.10, "EUR": 1, "GBP": 0.84, "INR": 91.50 },
        "GBP": { "USD": 1.31, "EUR": 1.19, "GBP": 1, "INR": 108.45 },
        "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0092, "INR": 1 }
    };

    // Conversion
    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("result").innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
