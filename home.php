<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['fname'])) {
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <style>
div.b2{
  margin-top:12px;
}
    </style>
</head>
<body>
    <div class="d-flex justify-content-center align-items-center vh-100">
    	
    	<div class="shadow w-450 p-3 text-center">
            
			<h3 class="display-4 "style="color:#ffff; background-image:linear-gradient(0deg,#0E185F,#0E185F);">Hello, <?=$_SESSION['fname']?></h3>
            <!-- <h2>Take personal advice from stock experts</h2> -->
                                                            <table class="table table-dark table-hover">
                                                                                <!-- <table>
                                                                                  <tr>
                                                                                    <th>Expert Name</th>
                                                                                    <th>WhatsApp Number</th>
                                                                                    <th>Email</th>
                                                                                  </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td>Abhishek</td>
                                                                                    <td>8307566223</td>
                                                                                    <td>abhiiit414@gmail.com</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                    <td>Pawan</td>
                                                                                    <td>9086571238</td>
                                                                                    <td>pawan902@gmail.com</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                    <td>Abhinav</td>
                                                                                    <td>7829098299</td>
                                                                                    <td>abhi77@example.com</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                    <td>Aiswarya</td>
                                                                                    <td>7829098268</td>
                                                                                    <td>aish2003@gmail.com</td>
                                                                                  </tr>
                                                                                  
                                                                                </tbody>
                                                                              </table> -->
				
          <div class="b1">
            <a href="http://localhost/prototype2/index.html" class="btn btn-warning">
            	Logout
            </a>
</button>
         
            <div class="b2">
			<a href="//localhost/prototype/expert-advice.html" class="btn btn-warning">
            	Expert Advice
            </a>
</button>
    </div>
    </div>
</body>
</html>

<?php }else {
	header("Location: login.php");
	exit;
} ?>