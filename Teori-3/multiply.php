<?php
    $number1 = isset($_GET['number1']) ? (int) $_GET['number1'] : 0;
    $number2 = isset($_GET['number2']) ? (int) $_GET['number2'] : 0;
    $result = $number1 * $number2;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiply</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method="GET">
        <input type="number" name="number1" value="<?php echo $number1; ?>">
        <span>x</span>
        <input type="number" name="number2" value="<?php echo $number2; ?>">
        <button type="submit">Result</button>
        <div class="result"><?php echo $result;?></div>
    </form>
</body>
</html>