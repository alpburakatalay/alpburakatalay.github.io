<?php
// Formdan gelen verileri al
$name = trim($_POST['name']); // boş olabilir
$feedback = $_POST['feedback'];

// Dosyayı aç (append modunda)
$file = fopen("cevaplar.txt", "a");

// Tarih ekleyerek yaz
fwrite($file, "Tarih: " . date("Y-m-d H:i:s") . "\n");

// Ad boşsa "Anonim" yaz
if (!empty($name)) {
    fwrite($file, "Ad: $name\n");
} else {
    fwrite($file, "Ad: Anonim\n");
}

fwrite($file, "Yorum: $feedback\n");
fwrite($file, "-------------------------\n");

fclose($file);

// Kullanıcıya mesaj göster
echo "Geri bildiriminiz kaydedildi! Teşekkürler.";
?>
