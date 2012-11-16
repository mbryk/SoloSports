<h1 class="title"> Ski </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
)); ?>
    <table class="table">
        <tr>
            <td><label>How long have you been skiing for?</label></td>
            <td><?php echo $form->textField($model,'length',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'length'); ?>
            </td>
        </tr>
        <tr>
            <td><label>What skiing do you most prefer?</label></td>
            <td><?php echo $form->textField($model,'type',array('size'=>60, 'maxlength'=>128)); ?>
		<?php echo $form->error($model,'type'); ?>
            </td>
        </tr>
    </table>
        
<?php echo CHtml::submitButton("Cancel",array('name'=>'cancel'));
echo CHtml::submitButton("On to Step 2 >",array('name'=>'step2')); ?>
       
        
<?php $this->endWidget(); ?>
</div>