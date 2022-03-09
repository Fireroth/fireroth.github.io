@echo off
cd saveddata
call TryLuckScore.cmd
if not defined luckscore set luckscore=0
cd..
mode con cols=120 lines=30
cls
title Try your luck 
:tlmain
cls
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
echo 1 = 0 to 10
echo 2 = 0 to 50
echo 3 = 0 to 100
echo 4 = 0 to ??? (custom)
echo 5 = save score
echo 6 = exit
echo.
echo Current score is %luckscore%
set /p mode=Enter mode:
if %mode%==1 set /a luckreward = 15 & set /a maxnum = 10 & goto tl1
if %mode%==2 set /a luckreward = 35 & set /a maxnum = 50 & goto tl1
if %mode%==3 set /a luckreward = 115 & set /a maxnum = 100 & goto tl1
if %mode%==4 set /a luckreward = 10 & goto tl4
if %mode%==5 goto save
if %mode%==6 goto ext
goto tlmain

:tl1
cls
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
set /a randm1=%random% %% %maxnum%
set /p randm11=Enter your guess:
cls
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
echo Random picked number: %randm1%
echo Your number: %randm11%
echo %randm1%-%randm11%
if %randm1%==%randm11% echo You win! & set /a luckscore=%luckscore% + %luckreward% & timeout 2 /nobreak >nul
pause
goto tlmain

:tl4
cls
rem custom
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
set /p setcus=Max. number:
set /a randmcus=%random% %% %setcus%
cls
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
echo Max. number is %setcus%
set /p randmcus2=Enter your guess:
cls
echo 				---------------------------------------------
echo.
echo                  			      Try your luck game
echo.
echo 				---------------------------------------------
echo First random picked number: %randmcus%
echo Your number: %randmcus2%
echo %randmcus%-%randmcus2%
if %randmcus%==%randmcus2% echo You win! & set /a luckscore=%luckscore% + %luckreward% & timeout 2 /nobreak >nul
pause
goto tlmain

:ext
cd..
menu.bat
exit

:save
cd resources
cd savedData
if errorlevel=1 md savedData & goto save
echo set /a luckscore=%luckscore% > TryLuckScore.cmd
cd..
cls
echo Saved
timeout 1 >nul
goto tlmain