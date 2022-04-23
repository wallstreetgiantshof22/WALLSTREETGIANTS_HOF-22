let p1= document.getElementById("id1");
let p2 = document.getElementById("id2");
let p3 = document.getElementById("id3");

let p4 = document.getElementById("id4");

function  SIP()
{   
    let a1 = parseInt(p1.value);
    let a2 = parseInt(p2.value);
    let a3 = parseInt(p3.value);

  


    let sum =0;
    for (let  i = 1; i <= a3; i++)
    {
        sum += a1;
        sum += (sum * a2 * (0.01));
       
    }
    p4.textContent+=sum;


    var xValues=[];
    var yValues=[];
    
    for(let j=0;j<=a3;j++)
    {   xValues.push(j);
        let s =0;
        for(let i=1;i<=j;i++)
        {
            s+=a1;
            s+=(s*a2*(0.01));
        }
        yValues.push(s);

       
       
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
