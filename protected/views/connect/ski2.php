<h1 class="title"> Ski </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
    <h1 style="text-align: center;">Rate Yourself...</h1>
    <table class="table" style="width:100%">
        <tr>
            <td><label>...on Moguls</label></td>
            <td>
<div id="slider" class="slider">
  <div class="knob"></div>
</div>
<div id="fontSize">Change the value, to change the fontsize.</div>
                

            </td>
        </tr>
        <tr>
            <td><label>...in Terrain Parks</label></td>
            <td>
            <?php $this->widget('CStarRating', array(
                    'model'=>$model,
                    'attribute'=>'terrain',
                    'minRating'=>1,
                    'maxRating'=>5,
                    'starCount'=>5,
                    'allowEmpty'=>false,
                )); ?>
            </td>
        </tr><tr>
            <td><label>... in General</label></td>
            <td>
<span id="SkiQuiz_talent" class="ratings">
<input id="SkiQuiz_talent_0" value="1" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_1" value="2" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_2" value="3" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_3" value="4" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_4" value="5" type="radio" name="SkiQuiz[talent]" />
</span>                
            </td>
        </tr>
    </table> 
    
<?php 
echo CHtml::submitButton("Back to Step 1",array('name'=>'step1'));
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>

</div>