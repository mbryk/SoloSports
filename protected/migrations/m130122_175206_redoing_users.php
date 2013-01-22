<?php

class m130122_175206_redoing_users extends CDbMigration
{
	public function up()
	{
            $this->execute('
        CREATE  TABLE IF NOT EXISTS `user` (
            `id` INT NOT NULL AUTO_INCREMENT ,
            `username` VARCHAR(45) NULL ,
            `email` VARCHAR(45) NULL ,
            `password` VARCHAR(60) NULL ,
            `password_reset` VARCHAR(255) NULL ,
            `create_time` INT(10) NULL ,
            `lastvisit_time` INT(10) NULL ,
            `is_admin` TINYINT NULL ,
            PRIMARY KEY (`id`) ,
            UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
            UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
        ENGINE = InnoDB');
	}

	public function down()
	{
		echo "m130122_175206_redoing_users does not support migration down.\n";
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