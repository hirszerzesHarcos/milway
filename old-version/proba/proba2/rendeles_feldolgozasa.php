<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3">
    <meta charset="utf-8">
    <title>Bob autóalkatrészek - Rendelési eredmények</title>
    <link rel="stylesheet" href="rendelesi_urlap.css">
    <!--script language="javascript" type="text/javascript" src="scriptek/index.js"></script-->
  </head>
  <body>
    <h1>Bob autóalkatrészek</h1>
    <h2>Rendelési eredmények</h2>
    <?php
      $abroncs_db=$_POST["abroncs_db"];
      $olaj_db=$_POST["olaj_db"];
      $gyertya_db=$_POST["gyertya_db"];
      $osszmennyiseg=0;
      $osszmennyiseg=$abroncs_db+$olaj_db+$gyertya_db;
      $vegosszeg=(float)$osszmennyiseg;
      define("ABRONCSAR", 100);
      define("OLAJAR", 10);
      define("GYERTYAAR", 4);
      echo "<p>Rendelés feldolgozva.</p>";
      echo "<p>Rendelés feldolgozásának időpontja: ".date("H:i, jS F Y");
      echo "<p>Rendelése az alábbi:</p>";
      echo "<p>$abroncs_db gumiabroncs<br>";
      echo "$olaj_db flakon olaj<br>";
      echo "$gyertya_db gyújtógyertya</p>";
      echo "<p>Rendelt termékek száma: $osszmennyiseg<br>";
      $vegosszeg=$abroncs_db*ABRONCSAR+$olaj_db*OLAJAR+$gyertya_db*GYERTYAAR;
      echo 'Részösszeg: '.number_format($vegosszeg, 2).'<br>';
      $adokulcs=0.25;
      $vegosszeg*=(1+$adokulcs);
      echo 'Végösszeg áfával: $'.number_format($vegosszeg, 2).'</p>';
      /*$magassag=200;
      $szelesseg=200;
      $kep=imagecreatetruecolor($szelesseg, $magassag);
      $feher=imagecolorallocate($kep, 255, 255, 255);
      $kek=imagecolorallocate($kep, 0, 0, 64);
      imagefill($kep, 0, 0, $kek);
      imageline($kep, 0, 0, $szelesseg, $magassag, $feher);
      imagestring($kep, 4, 50, 150, 'Értékesítés', $feher);
      Header('Content-type: image/png');
      imagepng($kep);
      imagedestroy($kep);*/
    ?>
  </body>
</html>