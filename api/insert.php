<?php
	$mysql_server = "localhost";
    $mysql_user = "root";
    $mysql_password = "";
    $mysql_database = "suport";
    echo $mysql_database;
    $conn=new mysqli($mysql_server,$mysql_user,$mysql_password,$mysql_database);

    if(!$conn->connect_error){
    	echo "数据库连接成功";
    	$conn->query("set names utf8");
    	//设置了也不支持中文，不知道为什么
    	$select="insert into suport (username, num) values ('ee', 1)";
    	$result=  $conn->query($select);
     	
//        echo "<p> <strong>$username</strong></p>";
    	$conn->close();
    }else{
    	echo "数据库连接失败";
    }
?>