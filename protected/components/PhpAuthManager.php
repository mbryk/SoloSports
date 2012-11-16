<?php
class PhpAuthManager extends CPhpAuthManager{
	protected $_webUserRolesClaimed=false;
    public function init(){
		parent::init();
		$this->claimRolePermissions();
    }
	
	public function claimRolePermissions($reset=false)
	{
		if($this->_webUserRolesClaimed===false OR $reset) {
			if(isset(Yii::app()->user) AND !Yii::app()->user->isGuest){
				// Assign user's role to this session 
				if(Yii::app()->user->getModel()->role) {
					$this->assign(Yii::app()->user->role, Yii::app()->user->id);
				}
			}
			$this->_webUserRolesClaimed = true;
		}
	}
	
	// Disable saving data to file
	public function __save()
	{
		return;
	}
}