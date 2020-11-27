<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <!--Stylesheets-->
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!--Title-->
    <title>Builder &#124; FinMC/SIP</title>
</head>
<!--End head-->

<body>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-9">
                    <div id="elements-content-gsweb">
                        <!-- The Elements Content -->
                        test
                    </div>
                </div>
                <div class="col">
                    <h3><strong>Elements</strong></h3>
                    <p>Here you can find all the elements to build your pages.</p>
                </div>
            </div>
        </div>
    </main>

    <script src="./node_modules/jquery/jquery.min.js"></script>
    <script src="./node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script>
        var $content = document.getElementById('elements-content-gsweb');
        console.log($content.textContent);
    </script>
</body>
<!--End body-->

</html>
<!--End html-->