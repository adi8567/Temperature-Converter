
    function convertTemperature() {
      const tempInput = document.getElementById('temperatureInput').value;
      const unitInput = document.getElementById('unitInput').value;
      const resultDiv = document.getElementById('result');

      if (isNaN(tempInput) || tempInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
      }

      const temperature = parseFloat(tempInput);
      let convertedTemp = 0;
      let targetUnit = "";

      if (unitInput === "celsius") {
        convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        targetUnit = "Fahrenheit";
        convertedTemp2 = temperature + 273.15; // Celsius to Kelvin
        targetUnit2 = "Kelvin";
      }
      
      else if (unitInput === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        targetUnit = "Celsius";
        convertedTemp2 = ((temperature - 32) * 5/9) + 273.15; // Fahrenheit to Kelvin
        targetUnit2 = "Kelvin";
      }
       
      else if (unitInput === "kelvin") {
        convertedTemp = temperature - 273.15; // Kelvin to Celsius
        targetUnit = "Celsius";
        convertedTemp2 = ((temperature - 273.15) * 9/5) + 32; // Kelvin to Fahrenheit
        targetUnit2 = "Fahrenheit";
      }
      
      resultDiv.innerHTML = `Converted Temperatures: <br> 
      ${convertedTemp.toFixed(2)}° ${targetUnit} <br>
      ${convertedTemp2.toFixed(2)}° ${targetUnit2}`;
    }