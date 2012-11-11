<?php

class m121111_180436_sport_statuses extends CDbMigration
{
	public function up()
	{
            $this->execute("
                ALTER TABLE `solosports`.`tbl_users` ADD COLUMN `primary_sport` INT(3) NULL DEFAULT 0  AFTER `status` , 
                ADD COLUMN `ski_status` INT(2) NULL DEFAULT 0  AFTER `primary_sport` , 
                ADD COLUMN `tennis_status` INT(2) NULL DEFAULT 0  AFTER `ski_status` , 
                ADD COLUMN `golf_status` INT(2) NULL DEFAULT 0  AFTER `tennis_status` ;
");
            
	}

	public function down()
	{
		echo "m121111_180436_sport_statuses does not support migration down.\n";
		return false;
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}