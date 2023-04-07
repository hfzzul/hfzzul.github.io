/* * * * * * * * * * * * * * * * * * D A T A * * * * * * * * * * * * * * * * * * * * * * * *

 THE DATA IN THIS SKETCH COMES
 FROM INVESTING.COM 
 DATA EXCHANGE. SEE THE DATA:
 https://uk.investing.com/crypto/bitcoin/historical-data

* * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * * * */

let table;
let numRows, numCols;
let date = [], price=[];

let x,y;

function preload(){
  table = loadTable("assets/bitcoin-price.csv","csv","header"); //load table

}

function setup() {
  createCanvas(1104, 700);
  //get data
  numRows = table.getRowCount(); // access rows
  numCols = table.getColumnCount(); //access columns 
  
  //loading dataset 
  
  for(let i=0; i<table.getRowCount(); i++){
    
    date[i] = table.getString(i,0);
    price[i]= table.getNum(i,1);
  }

  minMax(); // call back function of min and max values 
}

let bitSize =[];

function draw() {
  background('#0E1B35');
  visX= (width/4.5)*2.25;
  visY = height/2+120; 
  let radius = width/5-100;
  let angle = 360/numRows;
  
  for(let i = 0; i<numRows; i++){
    bitSize[i] = map(price[i],218.5,61309.6,10,300);
    
    //draw circles inrelation to data
    let datapointX = (bitSize[i]+radius)*cos(radians(angle*i))+visX
    let datapointY = (bitSize[i]+radius)*sin(radians(angle*i))+visY
    
    //drawlines towards inner circle
    let lineX = radius*cos(radians(angle*i))+visX
    let lineY = radius*sin(radians(angle*i))+visY
    
    //every 12 months draw a line that different colour
    if(i % 12 === 0){
      stroke('#1791B1');
    strokeWeight(1.0);
    } else{
      stroke('white');
    strokeWeight(0.5);
    }


    
    line(lineX,lineY,datapointX,datapointY);
    
    //use dist for hover func

    let dataSize;
    let dis = dist(mouseX,mouseY,datapointX,datapointY);

    //changes the circle to red if hover over and display dates and prices

    if(dis<5){
      fill('red');
      dataSize = 10;
      noStroke();
      circle(datapointX,datapointY,dataSize);
      textFont("Outfit");
      textAlign(CENTER)
      textSize(12);
      fill('white');
      text(date[i],visX,visY);
      text("$USD"+" "+price[i],visX,visY+20);
    } else{
      fill('#633FE5');
      dataSize = 5;
      noStroke();
      circle(datapointX,datapointY,dataSize);
    }
    
    
  }
  
  
}

let dataMin, dataMax=0;

//sort out min an maximum prices for bitcoin price
function minMax(){
  for(let i=0; i<numRows;i++){
    if(table.getNum(i,1)>dataMax){
      dataMax = table.getNum(i,1);
    }
  }
  dataMin = dataMax;
  for(let i=0; i<numRows; i++){
    if(table.getNum(i,1)<dataMin){
      dataMin = table.getNum(i,1);
    }
  }
  //print("max value "+ dataMax+" min value "+ dataMin);
}