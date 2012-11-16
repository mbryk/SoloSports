<?php

/**
 * ContactForm class.
 * ContactForm is the data structure for keeping
 * contact form data. It is used by the 'contact' action of 'SiteController'.
 */
class SkiQuiz extends CFormModel
{
	public $length;
	public $type;
	public $moguls;
	public $terrain;
	public $talent;

	/**
	 * Declares the validation rules.
	 */
	public function rules()
	{
		return array(
                        array('length, type', 'required'),
                        array('moguls, terrain, talent', 'required', 'on'=>'finish'),
		);
	}

	/**
	 * Declares customized attribute labels.
	 * If not declared here, an attribute would have a label that is
	 * the same as its name with the first letter in upper case.
	 */
	public function attributeLabels()
	{
		return array(
		);
	}
}