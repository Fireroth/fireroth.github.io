@echo off
cd saveddata
call GuessGameScore.cmd
if not defined guessscore set guessscore=0
cd..
mode con cols=120 lines=30
:guessgm
title Guessing game
cls
echo 				---------------------------------------------
echo.
echo                  				Guessing Game
echo.
echo 				---------------------------------------------
echo 1 = 0-25
echo 2 = 0-50
echo 3 = 0 to ??? (custom)
echo 4 = exit
echo 5 = save score
echo.
echo Current score is %guessscore%
set /p mode005=Enter mode:
if %mode005%==1 cls & set /a rewardguess = 10 & set /a maxnum = 25 & goto 10typeguess
if %mode005%==2 cls & set /a rewardguess = 25 & set /a maxnum = 50  & goto 10typeguess
if %mode005%==3 cls & set /a rewardguess = 15 & goto cstmguess
if %mode005%==4 cls & goto ext
if %mode005%==5 cls & goto save

goto guessgm

:10typeguess
set cheat=false
set /a randm17=%random% %% %maxnum%
title Guessing Game
set /a guessnum=0
set /a answer=%randm17%
set variable1=igiveup
echo Try and Guess my Number! 

:top
echo. 
set /p guess=Enter guess:
echo. 
set /a guessnum=%guessnum% +1
if %guess%==%variable1% goto gvup
if %guess% GTR %answer% echo Lower! 
if %guess% LSS %answer% echo Higher! 
if %guess%==%answer% goto correct
goto top

:correct
if %cheat%==true goto cheater
set /a guessscore=%guessscore% + %rewardguess%
cls
echo Congratulation
echo It was %answer%
echo It took you %guessnum% guesses. 
echo. 
pause
goto guessgm

:gvup 
echo Okay, the answer is: %answer%
set cheat=true
goto top

:cheater
cls
echo Congratulation
echo It was %answer%
echo But you cheated :(
echo. 
pause
goto guessgm

:cstmguess
cls
set /p maxnmbr00=Max number:
set cheat=false
set /a randm17=%random% %% %maxnmbr00%
title Guessing Game
set /a guessnum=0
set /a answer=%randm17%
set variable1=igiveup
echo Try and Guess my Number!
goto top

:ext
cd..
menu.bat
exit

:save
cd resources
cd savedData
if errorlevel=1 md savedData & goto save
echo set /a guessscore=%guessscore% > GuessGameScore.cmd
cd..
cls
echo Saved
timeout 1 >nul
goto guessgm
