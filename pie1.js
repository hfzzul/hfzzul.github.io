
//setup

const data = {
  labels: ['BitCoin', 'Ethereum', 'Tether', 'XRP', 'Bitcoin Cash', 'LiteCoin','ChainLink','BitcoinSV','EOS','Cardano'],
  datasets: [{
    label: 'PoW vs PoS',
    data: [65.60, 11.60, 4.50, 3.90, 2.60, 1.80,1.30,1.20,1.20,1.10],
    backgroundColor:['#613FDF','#613FDF','#1791B1','#1791B1','#613FDF','#613FDF','#1791B1','#613FDF','#1791B1','#1791B1'],
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
  labels: ['Proof of Work', 'Proof of stake','other alt coins'],
  datasets: [{
    label: 'PoW vs PoS',
    data: [68.60,24.48,6.92],
    backgroundColor:['#613FDF','#1791B1','#E70078'],
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



