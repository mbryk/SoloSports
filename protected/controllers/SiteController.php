<?php

class SiteController extends Controller
{
	/**
	 * Declares class-based actions.
	 */
	public function actions()
	{
		return array(
			// captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
			),
			// page action renders "static" pages stored under 'protected/views/site/pages'
			// They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
			),
		);
	}

	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	public function actionIndex()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		$this->render('index');
	}

	/**
	 * This is the action to handle external exceptions.
	 */
	public function actionError()
	{
	    if($error=Yii::app()->errorHandler->error)
	    {
	    	if(Yii::app()->request->isAjaxRequest)
	    		echo $error['message'];
	    	else
	        	$this->render('error', $error);
	    }
	}

	/**
	 * Displays the contact page
	 */
	public function actionContact()
	{
		$model=new ContactForm;
		if(isset($_POST['ContactForm']))
		{
			$model->attributes=$_POST['ContactForm'];
			if($model->validate())
			{
				$headers="From: {$model->email}\r\nReply-To: {$model->email}";
				mail(Yii::app()->params['adminEmail'],$model->subject,$model->body,$headers);
				Yii::app()->user->setFlash('contact','Thank you for contacting us. We will respond to you as soon as possible.');
				$this->refresh();
			}
		}
		$this->render('contact',array('model'=>$model));
	}

	/**
	 * Displays the login page
	 */
	public function actionLogin()
	{
            if(!Yii::app()->user->isGuest) Yii::app()->user->logout();
            $model=new LoginForm;
            
            // if it is ajax validation request
            if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
            {
                echo CActiveForm::validate($model);
                Yii::app()->end();
            }
            
            // collect user input data
            if(isset($_POST['LoginForm']))
            {
                $model->attributes=$_POST['LoginForm'];
                // validate user input and redirect to the previous page if valid
                if($model->validate() && $model->login())
                    $this->redirect(array('/main'));
            }
            
            // display the login form
            $this->render('login',array('model'=>$model));
	}

	/**
	 * Logs out the current user and redirect to homepage.
	 */
	public function actionLogout()
	{
		Yii::app()->user->logout();
		$this->redirect(Yii::app()->homeUrl);
	}
        
        public function actionRegister()
        {
            $model = new User;

            if (isset($_POST['User'])) {
                $code = 'imspecial';
                if(isset($_POST['code']) && $_POST['code']==$code){
                    $model->attributes = $_POST['User'];
                    
                    Yii::app()->user->setFlash('message', "Problem with Creating User. Please Try Again");
                    if ($model->save()) {
                        //now everything is saved as it was supposed to be
                        Yii::app()->user->setFlash('message', "Successfully created user!");

                        //auto login
                        $identity = new UserIdentity($_POST['User']['username'], $_POST['User']['password']); //user original password entered, instead already hashed password                   
                        $identity->authenticate();
                        Yii::app()->user->login($identity, 0);
                        
                        $this->redirect(array('/main'));
                    } else {
                        $model->password = $_POST['User']['password'];
                        $model->repeat_password = $_POST['User']['repeat_password'];
                    }
                }
                else{
                    Yii::app()->user->setFlash('message', "Sorry. We are in Beta and currently not accepting Registration. Please sign up for an invite.");
                    $this->redirect(Yii::app()->homeUrl);
                }
            }
            
            $this->render('register', array(
                'model' => $model,
                ));
	}
            
	public function actionMission()
	{
            $this->render('mission');
	}        
}