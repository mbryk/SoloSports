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
    <a href="#" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/male2.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="#" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/age.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="#" class="thumbnail">
      <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/expert.png" class="info-pic" alt="">
    </a>
  </li>
  <li class="span2">
    <a href="#" class="thumbnail">
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
          <a href="<?php echo Yii::app()->createUrl('main/trips') ?>" class="dropdown-toggle" data-toggle="dropdown">Trips
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
        
        <?php foreach($imgClass as $i=> $sport): ?>
        <li>
    <a href="#sModal<?php echo $i ?>" data-toggle="modal" class="thumbnail"><!-- modal to quiz....-->
      <img src="<?php echo Yii::app()->theme->baseUrl.'/css/imgs/'.$sport[0].'_label.jpg' ?>" class="sport<?php echo $sport[1] ?>">
      <?php if($sport[1]=='-inc'): ?>
      <div style="position:relative">
          <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/hp_in_progress.png" class="sport-in-progress" >
      </div>
        <?php endif; ?>
    </a>
  </li>
  
  
  <div id="sModal<?php echo $i; ?>" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      
      <?php switch($sport[1]): 
          case '-yes': ?>
      
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Congrats!</h3>
  </div>
  <div class="modal-body">
    <p>You've finished registering for this sport.</p>
    <p>Now go and find yourself some matchups!</p>
  </div>      
    
      <?php break; case '-inc': ?>
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Almost there</h3>
  </div>
  <div class="modal-body">
    <p>Thanks for signing up.</p>
    <p>Click here to take the quiz and get yourself rated and into the mix!</p>
  </div>      
      <?php break; case '-no': ?>
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Not yet registered</h3>
  </div>
  <div class="modal-body">
    <p>Loading...</p>
  </div>      
<?php      endswitch; ?>

  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
    <button class="btn btn-primary">Ok</button>
  </div>
</div>
        <?php endforeach; ?>
    </ul>
        </div>
</div>

  
