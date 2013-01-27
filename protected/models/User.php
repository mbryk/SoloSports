<?php

/**
 * This is the model class for table "user".
 *
 * The followings are the available columns in table 'user':
 * @property integer $id
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $password_reset
 * @property integer $create_time
 * @property integer $lastvisit_time
 * @property integer $is_admin
 * 
 * The followings are the available model relations:
 * @property Availabilities[] $availabilities
 * @property Match[] $matches
 * @property MatchInvites[] $matchInvites
 * @property MatchInvites[] $matchInvites1
 * @property RateAnswers[] $rateAnswers
 * @property UserAttributes[] $userAttributes
 * @property UserRatings[] $userRatings
 * @property UserRatings[] $userRatings1
 */
class User extends CActiveRecord
{
    
        public $repeat_password;
        
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return User the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'user';
	}
        
        public function behaviors()
	{
		return array(
			'CTimestampBehavior' => array(
				'class' => 'zii.behaviors.CTimestampBehavior',
				'createAttribute' => 'create_time',
				'updateAttribute' => false,
			)
		);
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
                        array('username, email, password, repeat_password', 'required', 'on'=>'insert'),
			array('create_time, lastvisit_time, is_admin', 'numerical', 'integerOnly'=>true),
			array('username, email', 'length', 'max'=>45, 'on'=>'insert'),
			array('repeat_password, password', 'length', 'max'=>60, 'on'=>'insert'),
			array('password_reset', 'length', 'max'=>255),
                        array('password', 'compare', 'compareAttribute' => 'repeat_password', 'on' => 'insert'),
                        
                        array('username', 'unique', 'message' => "This username already exists.", 'on' => 'insert'),
			array('email', 'unique', 'message' => "That e-mail address has already been used."),
			array('email', 'email', 'allowEmpty' => false, 'message' => "Please enter a valid email address"),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, username, email, password, password_reset, create_time, lastvisit_time, is_admin', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
                    'availabilities' => array(self::HAS_MANY, 'Availabilities', 'user_id'),
                    'matches' => array(self::HAS_MANY, 'Match', 'user_id'),
                    'matchInvites' => array(self::HAS_MANY, 'MatchInvites', 'user_id'),
                    'matchInvites1' => array(self::HAS_MANY, 'MatchInvites', 'inviter_id'),
                    'rateAnswers' => array(self::HAS_MANY, 'RateAnswers', 'user_id'),
                    'userAttributes' => array(self::HAS_MANY, 'UserAttributes', 'user_id'),
                    'userRatings' => array(self::HAS_MANY, 'UserRatings', 'rater_id'),
                    'userRatings1' => array(self::HAS_MANY, 'UserRatings', 'ratee_id'),                    
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'username' => 'Username',
			'email' => 'Email',
			'password' => 'Password',
			'repeat_password' => 'Repeat Password',
			'password_reset' => 'Password Reset',
			'create_time' => 'Create Time',
			'lastvisit_time' => 'Lastvisit Time',
			'is_admin' => 'Is Admin',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('username',$this->username,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('password',$this->password,true);
		$criteria->compare('password_reset',$this->password_reset,true);
		$criteria->compare('create_time',$this->create_time);
		$criteria->compare('lastvisit_time',$this->lastvisit_time);
		$criteria->compare('is_admin',$this->is_admin);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
        
	protected function beforeValidate()
	{

		$this->password = md5($this->password);
		$this->repeat_password = md5($this->repeat_password);

		return parent::beforeValidate();
	}  
        
        public function __get($name) {
            switch($name) {
                case "repeat_password" : {
                    return $this->repeat_password;
                }
            }
            return parent::__get($name);
        }
}