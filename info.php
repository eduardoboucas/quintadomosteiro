<?php

echo('Country:' . $_SERVER["HTTP_CF_IPCOUNTRY"]);

print_r("<pre>");
print_r($_SERVER);
print_r("</pre>");

//print_r(getallheaders());

?>