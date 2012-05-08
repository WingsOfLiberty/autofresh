<?php

$result = trim(file_get_contents('sentinel.txt'));
if ($result === "1")
{
  file_put_contents('sentinel.txt', "0");
  $success = 1;
}
else
{
  $success = 0;
}
echo json_encode(array("success" => $success));
