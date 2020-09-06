@echo off
setlocal enabledelayedexpansion
set n=1
for /f %%i in ('dir /b *') do (
ren "%%i" n!.webp
set /a n+=1)
echo 批量重命名完成！ 
pause