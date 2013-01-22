<?php if(Yii::app()->user->hasFlash('message')):?>
<div class="alert alert-success" style="position:absolute; width:100%;top:0">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <p style="text-align:center"><?php echo Yii::app()->user->getFlash('message'); ?></p>
</div>
<?php
Yii::app()->clientScript->registerScript(
   'myHideEffect',
   '$(".alert").animate({opacity: 1.0}, 3000).fadeOut("slow");',
   CClientScript::POS_READY
);
endif;?>

      <div class="hero-unit">
          <div style="position:relative"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/skier1.png" width="400" height="300" style="position: absolute;top:-160px;left:-70px"/> </div>
        <h1>This could be YOU!</h1>
        <p>SoloSports is a platform to help Athletes in Sports which are simply better played in Groups. </p>
        <p>Just fill out a <b>quick</b> and innovatively <b>visual</b> survey of your talent, and see who the <b>algorithm</b> spits out!</p>
      </div>
      
      
<div class="wrapper rounded6" id="templateContainer">
		    <div id="templateBody" class="bodyContent rounded6">
	
        

<div id="subscribeFormWelcome"><span style="font-size: 18px; color:#C7AEAE;">To join our Beta Database, sign up here!</span>
</div>


<form action="http://markbryk.us6.list-manage.com/subscribe/post?u=a7baf419d608a7790cd44a985&amp;id=6706395692" method="POST"  id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" placeholder="Email" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-NAME">Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="NAME" placeholder="Name" class="required" id="mce-NAME">
</div>
<div class="mc-field-group">
	<label for="mce-SPORT">Primary Sport <span class="asterisk">*</span>
</label>
	<select name="SPORT" class="required" id="mce-SPORT">
	<option value=""  placeholder="Primary Sport"></option>
	<option value="Skiing">Skiing</option>
        <option value="Golfing">Golfing</option>
        <option value="Tennis">Tennis</option>

	</select>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>	<div class="clear"><input type="submit" value="Get an Invite" name="subscribe" id="my-cool-button" class="button"></div>
</form>
</div>
		    </div>
      
      
      
      <div class="clear" style="padding-top: 15px "></div>    
      <!-- Example row of columns -->
      <div class="row" id="sport-labels">
        <div class="span4"><!-- modal to login/take quiz as guest/learn more-->
            <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/ski_label.jpg"/>
        </div>
        <div class="span4">
          <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/tennis_label.jpg"/>
       </div>
        <div class="span4">
          <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/golf_label.jpg"/>
        </div>
      </div>