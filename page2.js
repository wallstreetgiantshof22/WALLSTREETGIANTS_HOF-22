let twealth= document.getElementById("Twealth");
let sia= document.getElementById("SIA")
let Erate= document.getElementById("ERateofReturn")
let showtimedur= document.getElementById("timedur")



function TimeDur()
{
    let TW= twealth.value;
    let investAmount= sia.value;
    let rate= Erate.value;
    showtimedur.textContent= "Expected time of return is  " +( (Math.log(TW) -Math.log(investAmount))/(Math.log(1+ 0.01*rate)));
 


    var xValues=[];
    var yValues=[];
    
    for(let i=0;i<=investAmount;i++)
    {   xValues.push(i);
        yValues.push((Math.log(TW) -Math.log(i))/(Math.log(1+ 0.01*rate)));
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