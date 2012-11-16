<?php

class MainController extends Controller
{
	/* public function filters()
	{
		return array(
			'accessControl' // required to enable accessRules
		);
	}

	public function accessRules()
	{
		return array(
			/*array('allow',
				'actions' => array('signup'),
				'users' => array('*'),
			),
			array('allow',
				'roles' => array('user')
			),
			array('deny', // deny everybody else
				'users' => array('*')
			)
		);
	}*/
        
        public function actionIndex()
	{
            if(isset($_POST['quizit'])){
                $sport = key($_POST['quizit']);
                switch($sport):
                    case 'ski': Yii::app()->getModule('user')->setSportStatus($_POST['quizit'][$sport],1); break;
                    case 'tennis': Yii::app()->getModule('user')->setSportStatus($_POST['quizit'][$sport],2); break;
                    case 'golf': Yii::app()->getModule('user')->setSportStatus($_POST['quizit'][$sport],3); break;
                endswitch;
                
                if($_POST['quizit'][$sport] == 2)
                    $this->redirect(array('connect/'.$sport));
            }
            
            $this->render('index', array(
                    'imgClass'=>array(
                        'ski'=> Yii::app()->getModule('user')->getSportStatus(1),
                        'tennis'=>Yii::app()->getModule('user')->getSportStatus(2),
                        'golf'=>Yii::app()->getModule('user')->getSportStatus(3),
                        )
                    )
                );
	}
	public function actionTrips()
	{
		$this->render('trips');
	}
	public function actionInvites()
	{
            $this->render('invites');
	}
	public function actionBio()
	{
            $this->render('bio');
	}
}