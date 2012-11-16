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
            <td><?php $this->widget('CStarRating',array(
                'model'=>$model,
                'attribute'=>'moguls',
                'minRating'=>1,
                'maxRating'=>5,                          
                'starCount'=>5,
                'allowEmpty'=>false,
                )); ?>
            </td>
        </tr>
        <tr>
            <td><label>Rate Yourself in Terrain Parks</label></td>
            <td><?php $this->widget('CStarRating',array(
                'model'=>$model,
                'attribute'=>'terrain',
                'minRating'=>1,
                'maxRating'=>5,                          
                'starCount'=>5,
                'allowEmpty'=>false,
                )); ?>
            </td>
        <tr>
            <td><label>Rate Yourself in General</label></td>
            <td><?php $this->widget('CStarRating',array(
                'model'=>$model,
                'attribute'=>'talent',
                'minRating'=>1,
                'maxRating'=>5,                          
                'starCount'=>5,
                'allowEmpty'=>false,
                )); ?>
            </td>
    </table>    
<?php 
echo CHtml::submitButton("Finish",array('name'=>'test'));
$this->endWidget(); ?>
</div>