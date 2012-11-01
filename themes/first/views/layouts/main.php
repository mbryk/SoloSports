<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SoloSports</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/clear_cool.ico" type="image/x-icon" />    

    <link rel="stylesheet" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/style.css" type="text/css" media="screen, projection" />
    <link rel="stylesheet" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/extra.css" type="text/css" media="screen, projection" />
    <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl ?>/js/main.js"></script>
    <?php Yii::app()->clientScript->registerCoreScript( 'jquery' ) ?>


    
    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
    
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-33169527-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>       
  </head>

<body>
    <?php if($this->getUniqueId()=='site' && $this->action->Id=='index') echo '<!--' ?>
    <div id="header" class="navbar navbar-fixed-top">
          <div class="nav-collapse">
              <ul class="nav">
              <li><a href="http://solosports.markbryk.in/ ">Home</a></li>
              <li><a href="<?php echo Yii::app()->createUrl('site/mission') ?> ">About</a></li>
              <li><a href="contact">Contact</a></li>
                  <li> <?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Login"), Yii::app()->getModule('user')->loginUrl); ?> </li>
                  <li> <?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Register"), Yii::app()->getModule('user')->registrationUrl); ?> </li>
                  <li> <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Profile"), Yii::app()->getModule('user')->profileUrl); ?> </li>
                  <li> <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Logout").' ('.Yii::app()->user->name.')', Yii::app()->getModule('user')->logoutUrl); ?> </li>
              </ul>
          </div>        
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="http://solosports.markbryk.in/"><img src="<?php echo Yii::app()->request->baseUrl ?>/imgs/logo.png" height="<?php echo $this->getUniqueId()=='site' && $this->action->Id=='index' ? '135': '50'; ?>"></a>
          </div>
      </div>
    </div>
    
    <?php if($this->getUniqueId()=='site' && $this->action->Id=='index') echo '-->' ?>
    
    <div class="container main-container">
        <?php echo $content ?>
    </div> <!-- /container -->
    
    
<div class="footer">
	<div class="footer-inner">
    	<div class="left-sec"><a href="<?php echo Yii::app()->request->baseUrl ?>/">Home</a> |
            <a href="/site/page/view/about">About</a> |  
            <a href="/site/page/view/glossary">Glossary</a> | 
            <a href="/site/page/view/rules"> Rules</a> |  
            <a href="/site/page/view/terms">Terms of Use</a>
        </div>
        <div class="right-sec"><a href="http://www.facebook.com/Pinbooster" rel="nofollow"><img src="<?php echo Yii::app()->request->baseUrl; ?>/imgs/images/facebook.jpg" width="34" height="33"  alt="Facebook"/></a> <a href="https://twitter.com/pinbooster" rel="nofollow"><img src="<?php echo Yii::app()->request->baseUrl; ?>/imgs/images/twitter.jpg" width="34" height="33" alt="twitter" /></a> <a href="http://pinterest.com/pinbooster/" rel="nofollow"><img src="<?php echo Yii::app()->request->baseUrl; ?>/imgs/images/pinbooster.jpg" width="34" height="33" alt="Pinbooster" /></a> <a href="mailto:hello@pinbooster.com" rel="nofollow"><img src="<?php echo Yii::app()->request->baseUrl; ?>/imgs/images/mail.jpg" width="34" height="33" alt="Mail" /></a></div>
        <div class="cleardiv"></div>
    </div> 
    
</div>
  </body>
</html>