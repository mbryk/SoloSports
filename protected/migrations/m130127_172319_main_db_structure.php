<?php

class m130127_172319_main_db_structure extends CDbMigration
{
	public function up()
	{
            $this->execute("
                
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP TABLE IF EXISTS `tbl_profiles` ;
DROP TABLE IF EXISTS `tbl_profiles_fields` ;
DROP TABLE IF EXISTS `tbl_users` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rate_questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rate_questions` ;

CREATE  TABLE IF NOT EXISTS `rate_questions` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `sport` INT NULL ,
  `answer_type` INT NULL ,
  `name` VARCHAR(45) NULL ,
  `display_name` VARCHAR(45) NULL ,
  `question` VARCHAR(255) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rate_answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rate_answers` ;

CREATE  TABLE IF NOT EXISTS `rate_answers` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `q_id` INT NULL ,
  `user_id` INT NULL ,
  `value_num` INT NULL ,
  `value_text` VARCHAR(255) NULL ,
  `value_long_text` TEXT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `ra_question` (`q_id` ASC) ,
  INDEX `ra_user` (`user_id` ASC) ,
  CONSTRAINT `ra_question`
    FOREIGN KEY (`q_id` )
    REFERENCES `rate_questions` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ra_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `availabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `availabilities` ;

CREATE  TABLE IF NOT EXISTS `availabilities` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `user_id` INT NULL ,
  `sport` INT NULL ,
  `date_start` INT NULL ,
  `date_end` INT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `av_user` (`user_id` ASC) ,
  CONSTRAINT `av_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `match`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `match` ;

CREATE  TABLE IF NOT EXISTS `match` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `user_id` INT NULL ,
  `user_av_id` INT NULL ,
  `date_start` INT NULL ,
  `date_end` INT NULL ,
  `sport` INT NULL ,
  `comments` TEXT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `ma_user` (`user_id` ASC) ,
  INDEX `ma_user_availability` (`user_av_id` ASC) ,
  CONSTRAINT `ma_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ma_user_availability`
    FOREIGN KEY (`user_av_id` )
    REFERENCES `availabilities` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_ratings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_ratings` ;

CREATE  TABLE IF NOT EXISTS `user_ratings` (
  `id` INT NOT NULL ,
  `rater_id` INT NULL ,
  `ratee_id` INT NULL ,
  `match_id` INT NULL ,
  `stars` INT NULL ,
  `comments` TEXT NULL ,
  `date_posted` INT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `ur_rater` (`rater_id` ASC) ,
  INDEX `ur_ratee` (`ratee_id` ASC) ,
  INDEX `ur_match` (`match_id` ASC) ,
  CONSTRAINT `ur_rater`
    FOREIGN KEY (`rater_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ur_ratee`
    FOREIGN KEY (`ratee_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ur_match`
    FOREIGN KEY (`match_id` )
    REFERENCES `match` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `attributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `attributes` ;

CREATE  TABLE IF NOT EXISTS `attributes` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `data_type` INT NULL ,
  `name` VARCHAR(45) NULL ,
  `display_name` VARCHAR(45) NULL ,
  `sport` INT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_attributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_attributes` ;

CREATE  TABLE IF NOT EXISTS `user_attributes` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `user_id` INT NULL ,
  `attr_id` INT NULL ,
  `value_num` INT NULL ,
  `value_text` VARCHAR(255) NULL ,
  `value_long_text` TEXT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `ua_user` (`user_id` ASC) ,
  INDEX `ua_attribute` (`attr_id` ASC) ,
  CONSTRAINT `ua_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ua_attribute`
    FOREIGN KEY (`attr_id` )
    REFERENCES `attributes` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `details` ;

CREATE  TABLE IF NOT EXISTS `details` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `data_type` INT NULL ,
  `name` VARCHAR(45) NULL ,
  `display_name` VARCHAR(45) NULL ,
  `sport` INT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `match_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `match_details` ;

CREATE  TABLE IF NOT EXISTS `match_details` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `match_id` INT NULL ,
  `detail_id` INT NULL ,
  `value_num` INT NULL ,
  `value_text` VARCHAR(255) NULL ,
  `value_long_text` TEXT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `md_match` (`match_id` ASC) ,
  INDEX `md_detail` (`detail_id` ASC) ,
  CONSTRAINT `md_match`
    FOREIGN KEY (`match_id` )
    REFERENCES `match` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `md_detail`
    FOREIGN KEY (`detail_id` )
    REFERENCES `details` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sports`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sports` ;

CREATE  TABLE IF NOT EXISTS `sports` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NULL ,
  `display_name` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `filters`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `filters` ;

CREATE  TABLE IF NOT EXISTS `filters` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `data_type` INT NULL ,
  `name` VARCHAR(45) NULL ,
  `display_name` VARCHAR(45) NULL ,
  `sport` INT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_filters`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_filters` ;

CREATE  TABLE IF NOT EXISTS `user_filters` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `filter_id` INT NULL ,
  `user_id` INT NULL ,
  `value_int` INT NULL ,
  `value_text` VARCHAR(255) NULL ,
  `range_start` INT NULL ,
  `range_end` INT NULL ,
  `is_crucial` TINYINT NULL COMMENT 'usually filters are used to create your invite list. if this is checked, also don\'t show up on invite list of people not fitting filter.' ,
  PRIMARY KEY (`id`) ,
  INDEX `uf_filter` (`filter_id` ASC) ,
  INDEX `uf_user` (`user_id` ASC) ,
  CONSTRAINT `uf_filter`
    FOREIGN KEY (`filter_id` )
    REFERENCES `filters` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `uf_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `match_invites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `match_invites` ;

CREATE  TABLE IF NOT EXISTS `match_invites` (
  `id` INT NOT NULL ,
  `match_id` INT NULL ,
  `user_id` INT NULL ,
  `inviter_id` INT NULL ,
  `availability_id` INT NULL ,
  `accepted` TINYINT NULL ,
  `message` TEXT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `mi_match` (`match_id` ASC) ,
  INDEX `mi_user` (`user_id` ASC) ,
  INDEX `mi_inviter` (`inviter_id` ASC) ,
  INDEX `mi_availability` (`availability_id` ASC) ,
  CONSTRAINT `mi_match`
    FOREIGN KEY (`match_id` )
    REFERENCES `match` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mi_user`
    FOREIGN KEY (`user_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mi_inviter`
    FOREIGN KEY (`inviter_id` )
    REFERENCES `user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mi_availability`
    FOREIGN KEY (`availability_id` )
    REFERENCES `availabilities` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

");
	}

	public function down()
	{
		echo "m130127_172319_main_db_structure does not support migration down.\n";
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