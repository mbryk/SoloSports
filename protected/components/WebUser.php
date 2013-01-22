<?php
class WebUser extends CWebUser
{
	private $_model = null;

	public function getModel()
	{
		if (!$this->isGuest && $this->_model === null) {
			$this->_model = User::model()->findByPk($this->id);
		}
		return $this->_model;
	}

	public function getUsername(){
		if ($user = $this->getModel()) {
			return $user->username;
		}
	}
        
        function isAdmin(){
            if ($user = $this->getModel()) {
                return $user->is_admin;
            }
        }
        
        function afterLogin($fromCookie) {
            if (!$fromCookie) {
                $user = $this->getModel();
                $user->saveAttributes(array('lastvisit_time' => time()));
                $user->lastvisit_time = date();
            }
        }
}
