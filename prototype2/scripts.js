function info(){
 let stock_name=document.getElementById("name")
let stocks= stock_name.value;
    console.log(stocks)
 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realstonks.p.rapidapi.com',
		'X-RapidAPI-Key': '86c6134bc7mshe8c82f76ed75984p1e97cbjsn110de96519e9'
	}
};

fetch(`https://realstonks.p.rapidapi.com/${stocks}`, options)
	.then(response => response.json())
	.then((response) => {document.getElementById('one').innerHTML=response.price;
                    document.getElementById('two').innerHTML=response.total_vol;
                    document.getElementById('three').innerHTML=response.change_percentage;
                    document.getElementById('four').innerHTML=response.change_point;})
	.catch(err => console.error(err));}