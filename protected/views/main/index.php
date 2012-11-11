<h1 class="title">Profile</h1>
<div class="mid-well">

      <div style="float:left; width:30%">
            <ul class="thumbnails">
  <li class="span3">
    <a href="#" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/zack.jpg" class="prof-pic" alt="">
    </a>
  </li>
            </ul>
</div>

    <div class="info-frame" style="float:left;width:70%">
        <div>
            <table class="table">
                <tr>
                    <td><i class="icon-user"></i></td>
                    <td>User</td>
                    <td>Zack Morris</td>
                </tr>
                <tr>
                    <td><i class="icon-home"></i></td>
                    <td>Base</td>
                    <td>Bayside, California</td>
                </tr>
                <tr>
                    <td><i class="icon-road"></i></td>
                    <td>Favorite Retreat</td>
                    <td>Winter Park, CO</td>
                </tr>
            </table>
            
            
        
        </div>
        
      <ul class="thumbnails">

  <li class="span2">
    <a href="<?php echo Yii::app()->createUrl('main/bio') ?>" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/male2.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="<?php echo Yii::app()->createUrl('main/bio') ?>" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/age.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="<?php echo Yii::app()->createUrl('main/bio') ?>" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/expert.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="<?php echo Yii::app()->createUrl('main/bio') ?>" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/TaosCliffSkiing.jpg" class="info-pic" alt="">
    </a>
  </li>

  </ul>  
</div>

    <div class="clear"></div>
    <div class="navbar">
  <div class="navbar-inner">
    <ul class="nav">
        <li class="active"><a href="<?php echo Yii::app()->createUrl('main/index') ?>">Sports</a></li>
      <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Trips
              <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
              <li><a href="/main/trips#manage">Manage Trips</a></li>
              <li><a href="/main/trips#create">Create a Trip</a></li>
          </ul>
      </li>      
      <li><a href="<?php echo Yii::app()->createUrl('main/invites') ?>">Invites</a></li>
      <li><a href="<?php echo Yii::app()->createUrl('main/bio') ?>">Bio</a></li>
      <li><a href="<?php echo Yii::app()->createUrl('main/settings') ?>">Settings</a></li>
    </ul>
  </div>
</div> 
    
    
    <div id="sports-page">

    <ul class="thumbnails">
        
        <?php foreach($imgClass as $sport=> $status): ?>
        <li>
    <a href="#sModal-<?php echo $sport ?>" data-toggle="modal" class="thumbnail"><!-- modal to quiz....-->
      <img src="<?php echo Yii::app()->theme->baseUrl.'/css/imgs/'.$sport.'_label.jpg' ?>" class="sportstatus-<?php echo $status ?>">
      <?php if($status==1): ?>
      <div style="position:relative">
          <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/hp_in_progress.png" class="sport-in-progress" >
      </div>
        <?php endif; ?>
    </a>
  </li>
  
  <div id="sModal-<?php echo $sport; ?>" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <?php $this->beginWidget('CActiveForm'); ?>

      <?php switch($status): 
          case 2: ?>
      
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Congrats!</h3>
  </div>
  <div class="modal-body">
    <p>You've finished registering for this sport.</p>
    <p>Now go and find yourself some matchups!</p>
  </div>      
     <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
    <button class="btn btn-primary">Ok</button>
  </div> 
      
      <?php break; case 1: ?>
      
      
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Almost there</h3>
  </div>
  <div class="modal-body">
    <p>Thanks for signing up for the <?php echo $sport?> database.</p>
    <p>Click here to take the quiz and get yourself rated and into the mix!</p>
  </div>      
    <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
    <button type="submit" class="btn btn-primary btn-large" name="quizit[<?php echo $sport ?>]" value="2">Take the Quiz<i class="icon-chevron-right icon-white"></i></button>
  </div>    
      
      <?php break; case 0: ?>
      
      
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Not yet registered</h3>
  </div>
  <div class="modal-body">
    <p>Our database tells us that you are not a <?php echo ($sport=='tennis')?'tennis player':$sport.'er'; ?></p>
    <p>So... are you?</p>
    <p>Here are your options:</p>
  </div>  
  <div class="modal-footer">
      <button type="submit" class="btn btn-primary btn-large" name="quizit[<?php echo $sport ?>]" value="2">Take the Quiz<i class="icon-chevron-right icon-white"></i></button>
    <button type="submit" class="btn" name="quizit[<?php echo $sport ?>]" value="1">Quiz Later</button>
    <button class="btn" data-dismiss="modal" aria-hidden="true">Never mind</button>

  </div>      
<?php      endswitch; ?>

        <?php $this->endWidget(); ?>

</div>
  
        <?php endforeach; ?>
    </ul>
        </div>
</div>

  
