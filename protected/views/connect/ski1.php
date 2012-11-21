<h1 class="title">Solo Skier </h1>
<div class="mid-well">
<?php $form=$this->beginWidget('CActiveForm', array(
    'enableAjaxValidation'=>false,
    'id'=>'model-form',
    'stateful'=>true,
)); ?>
    <table class="table">
        <tr>
            <td><label>What do you ride?</label></td>
            <td>
                <div class="progress progress-striped active" id="slider2">
                    <div class="bar" id="bar" style="width: 40%;"><div class="knob"></div></div>
                    <input type="hidden" name="length" value="4">
                </div>
            </td>
        </tr>
        <tr>
            <td><label>What terrain do you ride?</label></td>
            <td><?php echo $form->textField($model,'type',array('size'=>60, 'maxlength'=>128)); ?>
		<?php echo $form->error($model,'type'); ?>
            </td>
        </tr>
    </table>
        
<?php echo CHtml::submitButton("Cancel",array('name'=>'cancel'));
echo CHtml::submitButton("On to Step 2 >",array('name'=>'step2')); ?>
       
        
<?php $this->endWidget(); ?>
</div>