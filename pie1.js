
//setup

const data = {
  labels: ['BitCoin', 'Ethereum', 'Tether', 'BNB', 'USD Coin','XRP','Cardano','DogeCoin','Polygon','Solana'],
  datasets: [{
    label: 'PoW vs PoS marketcap',
    data: [571367419527, 248516477115, 80950563526, 53406097633, 31791904293, 26585376453,15411167262,13102804279,10803785767,9939726999],
    backgroundColor:['#613FDF','#1791B1','#E70078','#1791B1','#E70078','#E70078','#1791B1','#613FDF','#1791B1','#1791B1'],
    borderWidth: 1
  }]
};

//config

const config = {

  type: 'doughnut',
    data,
    options: {
      legend:{
        display:false
      }
    }

};

//render

const myChart = new Chart(document.getElementById('myChart'),
config);

//2nd pie chart

//data of 2nd pie

const datapie = {
  labels: ['Proof of Work', 'Proof of stake','other alt coins'],
  datasets: [{
    label: 'PoW vs PoS',
    data: [68.60,24.48,6.92],
    backgroundColor:['#613FDF','#1791B1','#E70078'],
    borderWidth: 1
  }]
};

//config 2nd pie

const configpie ={
  type: 'doughnut',
  data:datapie,
  options: {
    legend:{
      display:false
    }
  }
};

//render pie2

const pieChart = new Chart(
  document.getElementById('pieChart'),
  configpie
);

//3rd pie chart 

//data of 3rd pie
const posdata ={
  labels: ['BTC', 'ETH'],
  datasets: [{
    label: 'BTC vs ETH avg transactions',
    data: [255086,1119292],
    backgroundColor:['#613FDF','#1791B1'],
    borderWidth: 1
  }]
};

//config 2nd pie 

const configpos ={
  type: 'doughnut',
  data:posdata,
  options: {
    legend:{
      display:false
    }
  }
};

//render 

const posChart = new Chart(
  document.getElementById('posChart'),
  configpos
);



