
      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit">
        <h1>Welcome!</h1>
        <p>SoloSports is a platform to help Athletes in sports which are simply better played in Groups. </p>
        <p>Just fill out a <b>quick</b> and innovatively <b>visual</b> survey of your talent, and see who the <b>algorithm</b> spits out!</p>
        <p>
            <a href="<?php echo Yii::app()->getModule('user')->registrationUrl[0]; ?>" class="btn btn-primary btn-large"><i class="icon-user icon-white"></i> Sign Up</a> 
            <a href="<?php echo Yii::app()->createUrl('site/mission') ?> " class="btn btn-success btn-large">Learn more &raquo;</a></p>
      </div>

      <!-- Example row of columns -->
      <div class="row" id="sport-labels">
        <div class="span4">
            <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/ski_label.jpg"/></a>
        </div>
        <div class="span4">
          <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/tennis_label.jpg"/></a>
       </div>
        <div class="span4">
          <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/golf_label.jpeg"/></a>
        </div>
      </div>
