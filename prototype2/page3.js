let targete= document.getElementById("targeted")
let rates = document.getElementById("ror")
let time= document.getElementById("fast");
let ine= document.getElementById("initialA")

function calculate()
{

   let targets = parseInt(targete.value) ;
   let rate = parseInt(rates.value);
   let times = parseInt(time.value);
   console.log(targets);
   console.log(rate);
   

   ine.textContent+= targets/(Math.pow(( 1 + 0.01*rate),times));


   var xValues=[];
    var yValues=[];
    
    for(let i=0;i<=times;i++)
    {   xValues.push(i);
        yValues.push(targets/Math.pow(( 1 + 0.01*rate),i));
    }
    
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 0,  max:1000000}}],
        }
      }
    });
    // document.getElementById('myChart');
   
      const config = {
        type: 'line',
        data: data,
        options: {}
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );



}