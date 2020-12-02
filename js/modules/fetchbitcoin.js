export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then((bitcoin) => {
    const btcpreco = document.querySelector('.btc-preco');
    btcpreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);  
}).catch((erro) => console.log(Error(erro)));
}



