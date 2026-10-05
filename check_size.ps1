Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile("c:\Users\helloWorld\Desktop\Delester\Fizzi\public\labels\cherry.png")
Write-Output "cherry.png: $($img1.Width)x$($img1.Height)"
$img1.Dispose()

$img2 = [System.Drawing.Image]::FromFile("c:\Users\helloWorld\Desktop\Delester\Fizzi\Beverage_can_label_design_20260926232321.jpg")
Write-Output "new_label: $($img2.Width)x$($img2.Height)"
$img2.Dispose()
