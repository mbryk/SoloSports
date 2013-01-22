<h1 class="title"> Test </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
<?php foreach($questions as $i=>$question): ?>
    <div class="quiz_question"><label><?php echo $question['question'] ?></label></div>
    <div class="quiz_choices">
    <ul class="question" data-qnum="<?php echo $i ?>" style="display:<?php echo ($i==0)?'block':'none'?>">
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
    </div>
    <?php endforeach; ?>
<?php 
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>

</div>
<script>
    function nextQuestion(number){
        var newnum = number+1;
        $('[data-qnum="'+number+'"]').css(display,none);
        $('[data-qnum="'+newnum+'"]').css(display,block);
    };
    $('.question').click(function(e){
        var number = $(e.target).data('qnum');
        var answer = $(e.target).data('answer');
        jQuery.ajax({
            'url':'answered',
            'data':{'question':number,'answer':answer},
            'type':'post','cache':false,
            'success':function(number){nextQuestion(number)}
        });
    });
</script>