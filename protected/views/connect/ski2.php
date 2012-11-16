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
            <td><label>Rate Yourself</label></td>
            <td><?php echo "Rate Widget for Moguls"  ?>
            </td>
        </tr>
        <tr>
            <td><label>Rate Yourself</label></td>
            <td><?php echo "Rate Widget for Terrain Parks"  ?>
            </td>
        </tr>
        <tr>
            <td><label>Rate Yourself</label></td>
            <td><?php echo "Rate Widget for General"  ?>
            </td>
        </tr>
    </table>    
	<!--<div class="row">
		<?php echo $form->labelEx($model,'name'); ?>
		<?php echo $form->textField($model,'name'); ?>
		<?php echo $form->error($model,'name'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'email'); ?>
		<?php echo $form->textField($model,'email'); ?>
		<?php echo $form->error($model,'email'); ?>
	</div>
-->
<?php 
echo CHtml::submitButton("Back to Step 1",array('name'=>'step1'));
echo CHtml::submitButton("Finish",array('name'=>'finish'));
$this->endWidget(); ?>
</div>