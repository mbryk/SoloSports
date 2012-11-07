<?php

class MainController extends Controller
{
	public function actionIndex()
	{
            if(isset($_POST['quizit'])){
                $sport = key($_POST['quizit']);
                $user = Yii::app()->getModule('user')->user();
                
                switch($sport):
                    case 'ski': $user->status_ski = $_POST['quizit'][$sport]; break;
                    case 'tennis': $user->status_tennis = $_POST['quizit'][$sport]; break;
                    case 'golf': $user->status_golf = $_POST['quizit'][$sport]; break;
                endswitch;
                $user->save();
                if($_POST['quizit'][$sport] == 2)
                    $this->redirect(array('connect/'.$sport));
            }
            
            $this->render('index', array(
                    'imgClass'=>array(
                        /*'ski'=>$user->status_ski,
                        'tennis'=>$user->status_tennis,
                        'golf'=>$user->status_golf,*/
                        'ski'=>2,
                        'tennis'=>0,
                        'golf'=>1,
                        )
                    )
                );
	}
	public function actionTrips()
	{
		$this->render('trips');
	}
	public function actionBio()
	{
		$this->render('bio');
	}

	// Uncomment the following methods and override them if needed
	/*
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			'inlineFilterName',
			array(
				'class'=>'path.to.FilterClass',
				'propertyName'=>'propertyValue',
			),
		);
	}

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'action1'=>'path.to.ActionClass',
			'action2'=>array(
				'class'=>'path.to.AnotherActionClass',
				'propertyName'=>'propertyValue',
			),
		);
	}
	*/
}