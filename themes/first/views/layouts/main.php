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
    <?php if($this->getUniqueId()=='connect'):
        //Yii::app()->clientScript->registerCssFile(Yii::app()->theme->baseUrl.'/css/jquery.rating.css');
        Yii::app()->clientScript->registerScriptFile(Yii::app()->theme->baseUrl.'/js/steps.js');
        ?>
    <script>
        $(window).load(function() {
            $('.ratings > input').rating({'required':true});
        });
    </script>
    <?php endif; ?>
    
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
    <div style="min-height: 100%;position:relative">
    
    <div class="container main-container" <?php if($this->getUniqueId()=='site' && $this->action->Id=='index'): ?> style="padding-top:60px" <?php endif; ?>>
        <?php echo $content ?>
    </div> <!-- /container -->
    
    
<div class="footer">
	<div class="footer-inner">
    	<div class="left-sec">
             <a class="brand" href="<?php echo Yii::app()->request->baseUrl ?>/"><img src="<?php echo Yii::app()->request->baseUrl ?>/imgs/logo.png" height="50"></a>
        </div>
        <div class="right-sec">
            <a href="<?php echo Yii::app()->request->baseUrl ?>/">Home</a> |
            <a href="<?php echo Yii::app()->createUrl('site/mission') ?> ">About</a> |  
            <a href="<?php echo Yii::app()->createUrl('site/contact') ?>">Contact</a> | 
            <?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Login"), Yii::app()->getModule('user')->loginUrl); ?>
            <!--<?php if(Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Register"), Yii::app()->getModule('user')->registrationUrl); ?>-->
            <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Profile"), Yii::app()->getModule('user')->profileUrl).' | '; ?>
            <?php if(!Yii::app()->user->isGuest) echo CHtml::link(Yii::app()->getModule('user')->t("Logout").' ('.Yii::app()->user->name.')', Yii::app()->getModule('user')->logoutUrl); ?>
        </div>
        <div class="cleardiv"></div>
    </div> 
    
</div>
    
    </div>
  </body>
</html>