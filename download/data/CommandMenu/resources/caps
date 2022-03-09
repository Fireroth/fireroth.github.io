@echo off
title Caps & cls
start caps.vbs & echo Try to write something :D > 1.txt
start 1.txt & echo Press any key to stop.
pause >nul
del 1.txt
taskkill /f /im wscript.exe
cd..
menu.bat
exit
