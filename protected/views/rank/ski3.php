<h1 class="title"> Ski </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
    
    <table class="table">
        <tr>
            <td><label>Rate Yourself on Moguls</label></td>
            <td>
<span id="SkiQuiz_moguls" class="ratings">
<input id="SkiQuiz_moguls_0" value="1" type="radio" name="SkiQuiz[moguls]" />
<input id="SkiQuiz_moguls_1" value="2" type="radio" name="SkiQuiz[moguls]" />
<input id="SkiQuiz_moguls_2" value="3" type="radio" name="SkiQuiz[moguls]" />
<input id="SkiQuiz_moguls_3" value="4" type="radio" name="SkiQuiz[moguls]" />
<input id="SkiQuiz_moguls_4" value="5" type="radio" name="SkiQuiz[moguls]" />
</span>
            </td>
        </tr>
        <tr>
            <td><label>Rate Yourself in Terrain Parks</label></td>
            <td><span id="SkiQuiz_terrain" class="ratings">
<input id="SkiQuiz_terrain_0" value="1" type="radio" name="SkiQuiz[terrain]" />
<input id="SkiQuiz_terrain_1" value="2" type="radio" name="SkiQuiz[terrain]" />
<input id="SkiQuiz_terrain_2" value="3" type="radio" name="SkiQuiz[terrain]" />
<input id="SkiQuiz_terrain_3" value="4" type="radio" name="SkiQuiz[terrain]" />
<input id="SkiQuiz_terrain_4" value="5" type="radio" name="SkiQuiz[terrain]" />
</span>
            </td>
        <tr>
            <td><label>Rate Yourself in General</label></td>
            <td>
<span id="SkiQuiz_talent" class="ratings">
<input id="SkiQuiz_talent_0" value="1" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_1" value="2" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_2" value="3" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_3" value="4" type="radio" name="SkiQuiz[talent]" />
<input id="SkiQuiz_talent_4" value="5" type="radio" name="SkiQuiz[talent]" />
</span>                
            </td>
    </table> 
    
<?php 
echo CHtml::submitButton("Back to Step 1",array('name'=>'step1'));
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>

</div>