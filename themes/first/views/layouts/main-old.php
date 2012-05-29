<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Solo Sports- Never Alone</title>
<link href="<?php echo Yii::app()->theme->baseUrl ?>/css/all-old.css" media="screen, projection" rel="stylesheet" type="text/css" />
<!--[if IE]>
      <link href="<?php echo Yii::app()->theme->baseUrl ?>/css/ie-old.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <![endif]-->
<!-- Determine iOS orientation using--->
<meta name="viewport" content="width=device-width, minimum-scale=1.0,   maximum-scale=1.0">

<link href='http://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700' rel='stylesheet' type='text/css'>
</head>

<body class="onepage clean">
<div id="wrap">
  <div id="main" class="clearfix_footer">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container-fluid"> <a href="<?php echo Yii::app()->request->baseUrl ?>/" class="brand">SoloSports</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li> <a href="<?php echo Yii::app()->request->baseUrl ?>/connect" class="">get hooked up</a></li>
              <li> <a href="<?php echo Yii::app()->request->baseUrl ?>/site/about" class="">our mission</a></li>
              <li> <a href="<?php echo Yii::app()->request->baseUrl ?>/site/faqs" class="">FAQ</a></li>
              <li> <a href="<?php echo Yii::app()->request->baseUrl ?>/site/contact" class="">contact us</a></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">




<?php echo $content; ?>












   </div>
  </div>
</div>
<div class="footer">
  <div class="navbar-inner">
    <div class="container-fluid">
      <div class="span5"> <a href="<?php echo Yii::app()->request->baseUrl ?>/" class="brand">SoloSports</a>
        <p class="small">Using technology, we are creating a better world.</p>
        </p>
      </div>
      <div class="span6 last pull-right">
        <ul class="nav">
          <li> <a href="<?php echo Yii::app()->request->baseUrl ?>/term_of_use" class="">Terms of Use</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<?php Yii::app()->clientScript->registerCoreScript( 'jquery' ) ?>




<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started --> 
<!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]--> 

<!-- end scripts-->

</body>
</html>