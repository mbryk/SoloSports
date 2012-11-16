<?php

class ConnectController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}
	public function actionSki()
	{
            if (isset($_POST['cancel'])) {
                $this->redirect(array('main/index'));
            } 
            elseif (isset($_POST['step2'])) {
                $this->setPageState('step1',$_POST['SkiQuiz']); // save step1 into form state
                $model=new SkiQuiz('step1');
                $model->attributes = $_POST['SkiQuiz'];
                
                if($model->validate()){
                    $this->render('ski2',array('model'=>$model));
                }
                
                else {
                    $this->render('ski1',array('model'=>$model));
                }
            }
            elseif (isset($_POST['finish'])) {
                $model=new SkiQuiz('finish');
                $model->attributes = $this->getPageState('step1',array()); //get the info from step 1
                $model->attributes = $_POST['SkiQuiz']; // then the info from step2
                if ($model->validate()){
                    var_dump($model->attributes);die;
                }
                else {
                    $this->render('ski2',array('model'=>$model));
                }
            }
            else { // this is the default, first time (step1)
                $model = new SkiQuiz;
                $this->render('ski1',array('model'=>$model));
            }
	}
        
	public function actionTennis()
	{
		$this->render('tennis');
	}
	public function actionGolf()
	{
		$this->render('golf');
	}
}