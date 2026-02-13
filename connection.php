<?php
class system
{
	protected $db;
	public function __construct()
	{
	$this->db=new PDO("mysql:host=localhost;dbname=quiz_system",'root','');
	if (!$this->db) 
	{
		echo " link not connected";
	}
	}


}
?>		