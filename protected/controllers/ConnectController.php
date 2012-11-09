<?php

class ConnectController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}
	public function actionSki()
	{
		$this->render('ski');
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