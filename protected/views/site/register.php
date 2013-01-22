<?php if(Yii::app()->user->hasFlash('message')):?>
<div class="alert alert-success" style="position:absolute; width:100%;top:0">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <p style="text-align:center"><?php echo Yii::app()->user->getFlash('message'); ?></p>
</div>
<?php
Yii::app()->clientScript->registerScript(
   'myHideEffect',
   '$(".alert").animate({opacity: 1.0}, 3000).fadeOut("slow");',
   CClientScript::POS_READY
);
endif;
?>
<h1 class="title">Register</h1>

<div class="mid-well">

<table class="form" id="registerform">
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'register-form',
	'enableAjaxValidation'=>true,
)); ?>

	<?php //echo $form->errorSummary($model); ?>
	<tr>
		<td><?php echo $form->label($model,'username'); ?></td>
		<td><?php echo $form->textField($model,'username') ?></td>
		<td><?php echo $form->error($model,'username') ?></td>
        </tr>
	<tr>
		<td><?php echo $form->label($model,'email'); ?></td>
		<td><?php echo $form->textField($model,'email') ?></td>
		<td><?php echo $form->error($model,'email') ?></td>
        </tr>
	<tr>
		<td><?php echo $form->label($model,'password'); ?></td>
		<td><?php echo $form->passwordField($model,'password') ?></td>
                <td><?php echo $form->error($model,'password') ?></td>
	<tr>
		<td><?php echo $form->label($model,'repeat_password'); ?></td>
		<td><?php echo $form->passwordField($model,'repeat_password') ?></td>
                <td><?php echo $form->error($model,'repeat_password') ?></td>                
        </tr>
	<tr>
		<td><?php echo CHtml::label('Signup Code','code'); ?></td>
		<td><?php echo CHtml::passwordField('code') ?></td>
        </tr>
</table>	
	
	<div class="row submit" style="position:relative">
		<?php echo CHtml::submitButton('Signup', array('id'=>'my-cool-button', 'style'=>'position:absolute; right:0')); ?>
	</div>
	
<?php $this->endWidget() ?>

</div>