@echo off
mode con cols=77 lines=25
title Pinger
echo 		---------------------------------------------
echo.
echo                  		    Pinger
echo.
echo 		---------------------------------------------
set /p IP=Enter IP/URL:
cls
:loop
PING -n 1 %IP% | FIND "TTL="
IF ERRORLEVEL 1 (SET in=c & echo Error :()
ping -t 2 0 10 127.0.0.1 >nul
PING -n 1 %IP% | FIND "TTL="
goto loop