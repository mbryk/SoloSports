<?php
$configRoot=dirname(__FILE__);
$params = require($configRoot.'/params.php');
// This is the configuration for yiic console application.
// Any writable CConsoleApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'My Console Application',
	// application components
	'components'=>array(
		// uncomment the following to use a MySQL database
		'db'=>array(
                    'connectionString' => "mysql:host={$params['db.host']};dbname={$params['db.name']}",
                            'username' => $params['db.username'],
                            'password' => $params['db.password'],
                            'charset' => 'utf8',
                            'enableParamLogging' => YII_DEBUG,
                            'emulatePrepare'=>true,
                            ),
	),
);