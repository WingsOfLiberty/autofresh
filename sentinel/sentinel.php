<?php

$max_tries = 600;
for($i = 0; $i < $max_tries; $i++)
{
  $result = trim(file_get_contents('sentinel.txt'));
  if ($result === "1")
  {
    file_put_contents('sentinel.txt', "0");
    $success = 1;
    break;
  }
  else
  {
    $success = 0;
  }
  usleep(250000);
}
header('Access-Control-Allow-Origin: *');
echo json_encode(array("success" => $success));
