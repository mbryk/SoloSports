<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SoloSports</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="stylesheet" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/style.css" type="text/css" media="screen, projection" />
    
    <?php Yii::app()->clientScript->registerCoreScript( 'jquery' ) ?>


    
    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body>

    <div id="header" class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="http://solosports.markbryk.in/"><img src="<?php echo Yii::app()->request->baseUrl ?>/imgs/logo.png"></a>
          </div>
          <div class="lower-header">          
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="<?php echo Yii::app()->createUrl('site/mission') ?> ">About</a></li>
              <li><a href="contact">Contact</a></li>
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

  </body>
</html>