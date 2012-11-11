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
        <li><a href="<?php echo Yii::app()->createUrl('main/index') ?>">Sports</a></li>
      <li class="dropdown active">
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

    <div id="trips-page">   
      <div id="myCarousel" class="carousel slide">
                <div class="carousel-inner">
                  <div class="item active">
                    <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/bootstrap-mdo-sfmoma-01.jpg" alt="">
                    <div class="carousel-caption">
                      <h4>First Thumbnail label</h4>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                  </div>
                  <div class="item">
                    <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/bootstrap-mdo-sfmoma-01.jpg" alt="">
                    <div class="carousel-caption">
                      <h4>Second Thumbnail label</h4>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                  </div>
                  <div class="item">
                    <img src="<?php echo Yii::app()->theme->baseUrl; ?>/css/imgs/bootstrap-mdo-sfmoma-01.jpg" alt="">
                    <div class="carousel-caption">
                      <h4>Third Thumbnail label</h4>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                  </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
              </div>
    </div>
</div>