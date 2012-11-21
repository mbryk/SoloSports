<h1 class="title"> Test </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
    <div class="quiz_question"><label>What do you ride?</label></div>

    <ul class="quiz_choices">
        <li><div>
                <div></div>
                <a class="quizPageImage" data-visualdna-choice="choice_52950" onclick="return false;" href="#">
                    <img src="http://cdawgownd.files.wordpress.com/2008/11/skiing.jpg" alt="">
                </a>
            </div>
        </li>
        <li><div><div></div><a class="quizPageImage" data-visualdna-choice="choice_52964" onclick="return false;" href="#"><img src="http://www.off-road.com/aimages/articlestandard/snowmobile/182008/512666/IMG_2946orc.jpg" alt=""></a></div></li>
        <li><div><div></div><a class="quizPageImage" data-visualdna-choice="choice_52954" onclick="return false;" href="#"><img src="http://www.chileski.net/images/chillan/snowboard.jpg" alt=""></a></div></li>
                    
                </ul>
    
    <hr>
<?php 
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>

</div>