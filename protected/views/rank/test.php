<h1 class="title"> Test </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
<?php //foreach($question as $i=>$question): if($i==0) ?>
    <div class="quiz_question"><label>What do you ride?</label></div>
    <div class="quiz_choices">
    <ul id="question_<?php echo $i ?>">
        
        <li><div>
                <div></div>
                <a class="quizPageImage" onclick="return false;" href="#">
                    <img src="http://cdawgownd.files.wordpress.com/2008/11/skiing.jpg" alt="">
                </a>
            </div>
        </li>
        <li><div><div></div><a class="quizPageImage" data-visualdna-choice="choice_52964" onclick="return false;" href="#"><img src="http://www.off-road.com/aimages/articlestandard/snowmobile/182008/512666/IMG_2946orc.jpg" alt=""></a></div></li>
        <li><div><div></div><a class="quizPageImage" data-visualdna-choice="choice_52954" onclick="return false;" href="#"><img src="http://www.chileski.net/images/chillan/snowboard.jpg" alt=""></a></div></li>
                    
                </ul>
        
    <ul style="display:none">
        
        <li><div><div></div><a class="quizPageImage" onclick="return false;" href="#"><img src="http://www.google.com/imgres?imgurl=http://ia.media-imdb.com/images/M/MV5BMTU2NjA0NDk0NV5BMl5BanBnXkFtZTcwOTA0OTQzMw%40%40._V1._SY317_.jpg&imgrefurl=http://www.imdb.com/title/tt0365748/&h=187&w=116&sz=1&tbnid=iAskaS7cJ22k0M:&tbnh=186&tbnw=115&zoom=1&usg=__HLjabqrwAeEaR14PvUy6K9SNEZQ=&docid=Bc23exr67YpExM&itg=1&sa=X&ei=HNeyUPGhMoqa0QH3vYGgCw&ved=0CKkBEPwdMAo" alt=""></a></div></li>
        <li><div><div></div><a class="quizPageImage" onclick="return false;" href="#"><img src="http://www.off-road.com/aimages/articlestandard/snowmobile/182008/512666/IMG_2946orc.jpg" alt=""></a></div></li>
        <li><div><div></div><a class="quizPageImage" onclick="return false;" href="#"><img src="http://www.chileski.net/images/chillan/snowboard.jpg" alt=""></a></div></li>
                    
                </ul>
    </div>
<?php 
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>

</div>
<script>
$('#question_<?php echo $i ?>').click(function(e){
    var answer = $(e.target).data('answer')
    <?php echo CHtml::ajax(array(  	
        'url'=>'images',	
        'data'=>array('question'=>$i, 'answer'=>'answer'),	
        'type'=>'post',
        'update'=>'nextQuestion('.$i.')',
        )) ?>
});
</script>