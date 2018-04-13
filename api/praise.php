<?php

class Connect{

    public function __construct($servername,$username,$password,$dbname){
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }
    public function getConnection(){
        try{
            $dsn = "mysql:host=$this->servername;dbname=$this->dbname";
            $this->con = new PDO($dsn,$this->username,$this->password);

        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }
    public function selectData($sql){
        if($this->con == null){
            $this->getConnection();
        }
        //$req = $this->con->query($sql);
        //echo $req;
        foreach ($this->con->query($sql) as $row) {
            return $row; //你可以用 echo($GLOBAL); 来看到这些值
        }
        //return $this->con->query($sql);
    }
    public function operateData($sql){
        if($this->con == null){
            $this->getConnection();
        }
        $res = $this->con->exec($sql);

    }
    public function closeCon(){
        $this->con = null;
    }

}

class RealCon extends Connect{
    public function __construct($servername,$username,$password,$dbname){
        parent::__construct($servername,$username,$password,$dbname);
    }
    public function operate($username, $num){
        //需要先查看有没有，没有插入，有的话更新
        $findSql = "select * from support where username=$username";
        $find = $this->selectData($findSql);
        //var_dump(array($find)[0]);
        if($find == 0){
            $insert = "insert into support (username, num) values ($username, $num)";
        }else{
            $insert = "update support set num=$num where username=$username";
        }
        //echo $insert;
        $re = $this->operateData($insert);
        echo '成功';
        $this->closeCon();
    }
}

$praiseC = new RealCon('localhost:3306','root','123456','support');
$username = $_GET['username'];
$num = $_GET['num'];
$praiseC->operate($username, $num);


?>