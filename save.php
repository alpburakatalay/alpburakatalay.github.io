<?php
$feedback = $_POST['feedback'];

$file = fopen("cevaplar.txt", "a");
fwrite($file, "Tarih: " . date("Y-m-d H:i:s") . "\n");
fwrite($file, "Yorum: $feedback\n");
fwrite($file, "-------------------------\n");
fclose($file);

echo "Geri bildiriminiz kaydedildi! Teşekkürler.";
?>
