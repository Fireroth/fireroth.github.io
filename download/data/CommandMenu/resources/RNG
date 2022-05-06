@echo off
mode con cols=120 lines=30
cls
title RNG
echo 				---------------------------------------------
echo.
echo                  			   Random number generator
echo.
echo 				---------------------------------------------
echo RN.txt will be located in C:/users/%username%/desktop.
pause
cd C:/users/%username%/desktop
echo Generating random numbers...
:1
set randm=%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%-%random%
set /a lines=%lines% + 1
title RN Generator:%randm%
echo Lines of random numbers: %lines%
echo %randm%  >> RN.txt
goto 1
