<h1 class="title">Login</h1>

<?php
$this->pageTitle=Yii::app()->name . ' - '.UserModule::t("Login");
$this->breadcrumbs=array(
	UserModule::t("Login"),
);
?>

<div class="mid-well">

<?php if(Yii::app()->user->hasFlash('loginMessage')): ?>

<div class="success">
	<?php echo Yii::app()->user->getFlash('loginMessage'); ?>
</div>

<?php endif; ?>

<table class="form" id="loginform">
<?php echo CHtml::beginForm(); ?>

	<?php echo CHtml::errorSummary($model); ?>
	<tr>
		<td><?php echo CHtml::activeLabelEx($model,'username'); ?></td>
		<td><?php echo CHtml::activeTextField($model,'username') ?></td>
        </tr>
	<tr>
		<td><?php echo CHtml::activeLabelEx($model,'password'); ?></td>
		<td><?php echo CHtml::activePasswordField($model,'password') ?></td>
        </tr>
        
        <tr>
            <td><?php echo CHtml::link(UserModule::t("Lost Password?"),Yii::app()->getModule('user')->recoveryUrl); ?></td>
        </tr>
        <tr>
            <td><?php echo CHtml::activeCheckBox($model,'rememberMe'); ?>
		<?php echo CHtml::activeLabelEx($model,'rememberMe', array('style'=>'display:inline-block')); ?></td>
        </tr>
</table>	
	
	<div class="row submit" style="position:relative">
		<?php echo CHtml::submitButton(UserModule::t("Login"), array('id'=>'my-cool-button', 'style'=>'position:absolute; right:0')); ?>
	</div>
	
<?php echo CHtml::endForm(); ?>


<?php
$form = new CForm(array(
    'elements'=>array(
        'username'=>array(
            'type'=>'text',
            'maxlength'=>32,
        ),
        'password'=>array(
            'type'=>'password',
            'maxlength'=>32,
        ),
        'rememberMe'=>array(
            'type'=>'checkbox',
        )
    ),

    'buttons'=>array(
        'login'=>array(
            'type'=>'submit',
            'label'=>'Login',
        ),
    ),
), $model);
?>
</div>