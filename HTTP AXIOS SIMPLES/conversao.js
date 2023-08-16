axios.get('https://api.exchangerate-api.com/v4/latest/USD')
  .then(function (response) {
    // Manipulando a resposta bem-sucedida
    console.log(response);
    console.log(response.data.rates);

    // Função para converter USD para BRL
    function converterDolarParaReal(valor) {
      var taxaCambio = response.data.rates.BRL; //4.88
      var valorReal = valor * taxaCambio;
      return valorReal.toFixed(2); // toFixed é responsável por arredondar o valor para 2 casas decimais
    }

    // Exemplo de uso da função
    var valorDolar = 100; // Valor em dólar
    var valorReal = converterDolarParaReal(valorDolar);
    console.log('Valor em dólar: ', valorDolar); // Valor convertido em BRL
    console.log('Convertido para reais: ', valorReal); // Valor convertido em BRL
    document.querySelector('.dados').textContent = valorReal;
  })
  .catch(function (error) {
    // Lidar com erros
    console.log(error);
  });