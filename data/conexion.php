<?php

$host = 'localhost';
$bd = 'registro';
$usuario = 'root';
$password = '';

// $conexion = mysqli_connect($host, $usuario, $password, $bd);
// if(!$conexion) {
//     echo 'Error al conectar a la base de datos';
// } else {
//     echo 'Conectado a la base de datos';
// }

try {
    $conexion = new mysqli($host, $usuario, $password, $bd);
    // $conexion = new PDO("myslq:host=$host;dbname=$bd", $usuario, $password);
} catch (Exception $e) {
    echo $e->getMessage();
    exit();
}

