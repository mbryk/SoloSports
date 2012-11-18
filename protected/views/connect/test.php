<h1 class="title"> Ski </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
));
?>
    <div class="steps steps-striped active">
            <div id="SkiQuiz_length">
                        <input id="SkiQuiz_length" value="1" type="radio" name="SkiQuiz[terrain]" style="float:left" />
        <div class="bar" style="width:23%;float:left"></div>
                <input id="SkiQuiz_length" value="2" type="radio" name="SkiQuiz[terrain]" style="float:left" />
        <div class="bar" style="width:23%;float:left"></div>
                <input id="SkiQuiz_length" value="3" type="radio" name="SkiQuiz[terrain]" style="float:left" />
        <div class="bar" style="width:23%;float:left"></div>
                <input id="SkiQuiz_length" value="4" type="radio" name="SkiQuiz[terrain]" style="float:left" />
        <div class="bar" style="width:23%;float:left"></div>
                <input id="SkiQuiz_length" value="5" type="radio" name="SkiQuiz[terrain]" style="float:left" />
        </div>
        
    </div>
    
    <table class="table">
        <tr>
            <td><label>Rate Yourself in General</label></td>
            <td>
            </td>
    </table>    
<?php 
echo CHtml::submitButton("Finish",array('name'=>'test'));
$this->endWidget(); ?>
</div>