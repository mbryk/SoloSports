<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity
{
    protected $_id;    
    
    public function authenticate()
    {
        if(strpos($this->username,'@')) {
            $user = User::model()->findByAttributes(array('email'=>$this->username));
        } else { 
            $user = User::model()->find('LOWER(username)=?', array(strtolower($this->username)));
        }
        if($user===null)
            $this->errorCode = self::ERROR_USERNAME_INVALID;
        else if(md5($this->password)!== $user->password)
            $this->errorCode=self::ERROR_PASSWORD_INVALID;
        else {
            $this->_id = $user->id;
            $this->errorCode = self::ERROR_NONE;
        }
       return !$this->errorCode;
    }

    public function getId(){
        return $this->_id;
    }
    
    protected function logInUser($user)
    {
        if($user)
        {
            $this->_id=$user->id;
            $this->setState('name', $user->username);
            $this->errorCode=self::ERROR_NONE;
        }
    }    
    
    public static function impersonate($userId)
    {
        $ui = null;
        $user = User::model()->findByPk($userId);
        if($user){   
            $ui = new UserIdentity($user->email, "");
            $ui->logInUser($user);
        }
        return $ui;
    }

}