/* * * * * * * * * * * * * * * * * * D A T A * * * * * * * * * * * * * * * * * * * * * * * *

 THE DATA IN THIS SKETCH COMES
 FROM CAMBRIDGE BITCOIN CUNSUMPTION INDEC
 DATA EXCHANGE. SEE THE DATA:
 https://ccaf.io/cbeci/mining_map

* * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * * * */

const key = 'pk.eyJ1Ijoiemp3ZjE0NSIsImEiOiJjbGNxc3Awb2cwMXE4M25wOWEyYXFuZTFpIn0.ph355uVQxvuihKavg1TQ5g';
const mappa = new Mappa('Mapbox',key); //const declare var once
let myMap; // refers to world map


const options = {
    lat:51.201538,//lat
    lng:7.016713,//long
    zoom:2, // higher thevalue more zoom
    style:'mapbox://styles/mapbox/traffic-night-v2',
    studio: true,
    
  }

function preload(){
  dataset = loadTable("assets/global_hashrate.csv","csv","header"); //load dataset
}


function setup(){
    let canvas; // ref to canvas
    canvas = createCanvas(1280,600); //creates a canvas
    canvas.parent("#mappa");
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas); // include map as overlay
    minHash = min(dataset.getColumn("Global Hash Rate")); // get min value 
    maxHash = max(dataset.getColumn("Global Hash Rate")); // get max value from dataset 

    console.log("max:"+maxHash+", min:" + minHash); // console check 
  }

  function draw(){

    clear();

    let hoverRow = -1;
    let selectionX;
    let selectionY;

    for(let row=0; row<dataset.getRowCount();row++){
      let lat = dataset.getNum(row,1);
      let lng = dataset.getNum(row,2);
      let pos = myMap.latLngToPixel(lat,lng);
      let hsh = dataset.getNum(row,3);
      let hshSize = map(hsh,minHash,maxHash,10,50);
      let hshClr = map(hsh,minHash,maxHash,210,300);

      

      noStroke();
      colorMode(HSB);
      fill(hshClr,75 , 100);
      ellipse(pos.x, pos.y, hshSize, hshSize);

      let d = dist(mouseX,mouseY,pos.x,pos.y);
        if(d<hshSize/2){
          hoverRow = row;
          selectionX = pos.x;
          selectionY = pos.y;
        }
    }

    if (hoverRow > -1) {
      let hoverNum = dataset.getNum(hoverRow,3);
      textAlign(CENTER);
      textSize(15);
      fill('#FFFFFF');
      noStroke;

      text("Hashrate:"+hoverNum,selectionX,selectionY-25);
    }
    
}