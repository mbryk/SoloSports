<?php

class m121111_181641_fix_sport_statuses extends CDbMigration
{
	public function up()
	{
            $this->execute("ALTER TABLE `solosports`.`tbl_users` DROP COLUMN `golf_status` , DROP COLUMN `tennis_status` , DROP COLUMN `ski_status` , DROP COLUMN `primary_sport` , ADD COLUMN `sports` VARCHAR(4) NULL DEFAULT '0000'  AFTER `status` ;
");
	}

	public function down()
	{
		echo "m121111_181641_fix_sport_statuses does not support migration down.\n";
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