let InvestA=document.getElementById("Iamount");
let RateofReturn= document.getElementById("Rate");
let tenuree= document.getElementById("tenure")
let expect= document.getElementById("expected")

function lumpsum()
{
    let InvestAmount=InvestA.value;
    let Tenure=tenuree.value
    let ERateofReturn=RateofReturn.value;
    console.log(InvestAmount)
    console.log(Tenure)
    console.log(ERateofReturn)
    expect.textContent+=(Math.pow(1+ 0.01*ERateofReturn,Tenure))*InvestAmount;
    
    
    var xValues=[];
    var yValues=[];
    
    for(let i=0;i<=tenuree.value;i++)
    {   xValues.push(i);
        yValues.push(Math.pow((1 + 0.01*RateofReturn.value),i)*InvestA.value);
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
          yAxes: [{ticks: {min: InvestA.value,  max:1000000}}],
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