<!DOCTYPE html>
<html lang="en">

<head>    
    <title>Roux Academy Conference 2013 -- Home</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,400italic,700,700italic,300,300italic' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/colorbox.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
</head>

<body id="home">
    <section class="container">
        <div class="content row">
            <?php include "php/header.php"; ?>
            <?php include "php/snippet-carousel.php"; ?>
            <section class="main col col-lg-8">
            <?php include "php/article-intro.php"; ?>
            <?php include "php/article-abouttheartists.php"; ?>
            <?php include "php/article-aboutthevenue.php"; ?>
            </section> <!-- main -->
            <section class="sidebar col col-lg-4">
            <?php include "php/aside-register.php"; ?>
            <?php include "php/aside-lastyear.php"; ?>
            <?php include "php/aside-accordion.php"; ?>
            </section> <!-- sidebar -->
            <?php include "php/footer.php"; ?>
        </div> <!-- content -->
    </section> <!--container-->
    

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>    
    <script src="js/jquery.colorbox-min.js"></script>
    <script src="js/custom.js"></script>
</body>

</html>
