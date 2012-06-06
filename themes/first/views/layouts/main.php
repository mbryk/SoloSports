<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SoloSports</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="../assets/css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="../assets/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#"><img src="<?php echo Yii::app()->request->baseUrl?>/imgs/logo.png"</a>
          </div>
          <div>          
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
              <ul class="nav" style="float:right">
                  <li> <?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Login"), Yii::app()->getModule('user')->loginUrl); ?> </li>
                  <li> <?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Register"), Yii::app()->getModule('user')->registrationUrl); ?> </li>
                  <li> <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Profile"), Yii::app()->getModule('user')->profileUrl); ?> </li>
                  <li> <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Logout").' ('.Yii::app()->user->name.')', Yii::app()->getModule('user')->logoutUrl); ?> </li>
              </ul>
          </div><!--/.nav-collapse -->
          </div>
      </div>
    </div>

    <div class="container">
        <?php echo $content ?>
      <hr>


    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <?php Yii::app()->clientScript->registerCoreScript( 'jquery' ) ?>

  </body>
</html>