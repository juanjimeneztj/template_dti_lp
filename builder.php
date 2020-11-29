<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <!--Stylesheets-->
    <link rel="stylesheet" href="./node_modules/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/master/css/style.css">

    <!--Title-->
    <title>Builder &#124; FinMC/SIP</title>
</head>
<!--End head-->

<body>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-9">
                    <div id="elements-content-gsweb"></div>
                    <template id="gsweb-tools-elements">
                        <span class="tools-gsweb">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <i class="far fa-copy"></i>
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-times"></i>
                        </span>
                    </template>
                </div>
                <div class="col">
                    <h3><strong>Elements</strong></h3>
                    <p>Here you can find all the elements to build your pages.</p>
                    <div class="elements">
                        <div class="item" draggable="true">
                            <div class="text-center">
                                <i class="fas fa-heading"></i><br />
                                Title
                            </div>
                        </div>
                        <div class="item item-paragraph" draggable="true">
                            <div class="text-center">
                                <i class="fas fa-paragraph"></i><br />
                                Paragraph
                            </div>
                        </div>
                        <div class="item" draggable="true">
                            <div class="text-center">
                                <i class="fas fa-image"></i><br />
                                image
                            </div>
                        </div>
                        <div class="item" draggable="true">
                            <div class="text-center">
                                <i class="fab fa-youtube"></i><br />
                                Video
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="./node_modules/jquery/jquery.min.js"></script>
    <script src="./node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="module" src="./components/components.js"></script>
    <script async src="./assets/master/js/main.js"></script>
</body>
<!--End body-->

</html>
<!--End html-->