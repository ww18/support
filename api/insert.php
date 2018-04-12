<?php
	$mysql_server = "localhost:3306";
    $mysql_user = "root";
    $mysql_password = "123456";
    $mysql_database = "support";
    //echo $mysql_database;
    $conn=new mysqli($mysql_server,$mysql_user,$mysql_password,$mysql_database);

    if(!$conn->connect_error){
    	//echo "数据库连接成功";

    	$username = $_GET['username'];
    	$num = $_GET['num'];

    	$conn->query("set names utf8");
    	//设置了也不支持中文，不知道为什么

    	//需要先查看有没有，没有插入，有的话更新
    	$findSql = "select * from support where username=$username";
    	$find = $conn->query($findSql);
        //echo mysqli_fetch_array($find)['username'];
    	if(empty(mysqli_fetch_array($find))){
    	    $insert = "insert into support (username, num) values ($username, $num)";
    	}else{
    	    $insert = "update support set num=$num where username=$username";
    	}

    	$result = $conn->query($insert);
     	echo '成功';
//        echo "<p> <strong>$username</strong></p>";
    	$conn->close();
    }else{
    	echo "数据库连接失败";
    }
?>