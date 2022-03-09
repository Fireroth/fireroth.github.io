@echo off
mode con cols=120 lines=30
title Calculator
:maincalc
cls
echo 				---------------------------------------------
echo.
echo                  				Calculator V1.0
echo.
echo 				---------------------------------------------
set /p frst=Enter first number:
set /p ope=Select the operator ( -, +, * or /):
set /p sec=Enter second number:
set /a end=%frst%%ope%%sec%
cls
echo 				---------------------------------------------
echo.
echo                  				Calculator V1.0
echo.
echo 				---------------------------------------------
echo %frst% %ope% %sec% = %end%
echo Your answer is: %end%															
echo 1 = again
echo 2 = exit
set /p repa2=Enter option:
if %repa2% ==  1 goto maincalc
if %repa2% ==  2 goto ext
if %repa2% ==  3 goto setchoice

goto maincalc

:ext
cd..
menu.bat
exit
