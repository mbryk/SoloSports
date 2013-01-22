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
<h1 class="title">Login</h1>
    <?php
$this->pageTitle=Yii::app()->name . ' - Login';
$this->breadcrumbs=array(
	'Login',
);
?>
<div class="mid-well">

<table class="form" id="loginform">
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'login-form',
	'enableAjaxValidation'=>true,
)); ?>

	<?php //echo CHtml::errorSummary($model); ?>
	<tr>
		<td><?php echo CHtml::activeLabelEx($model,'username'); ?></td>
		<td><?php echo CHtml::activeTextField($model,'username') ?></td>
        </tr>
	<tr>
		<td><?php echo CHtml::activeLabelEx($model,'password'); ?></td>
		<td><?php echo CHtml::activePasswordField($model,'password') ?></td>
        </tr>
        
        <tr>
            <td><?php // echo CHtml::link(UserModule::t("Lost Password?"),Yii::app()->getModule('user')->recoveryUrl); ?></td>
        </tr>
        <tr>
            <td><?php echo CHtml::activeCheckBox($model,'rememberMe'); ?>
		<?php echo CHtml::activeLabelEx($model,'rememberMe', array('style'=>'display:inline-block')); ?></td>
        </tr>
</table>	
	
	<div class="row submit" style="position:relative">
		<?php echo CHtml::submitButton('Login', array('id'=>'my-cool-button', 'style'=>'position:absolute; right:0')); ?>
	</div>
	
<?php $this->endWidget() ?>

</div>