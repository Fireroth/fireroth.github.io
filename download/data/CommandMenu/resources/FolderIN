@echo off
cls
Title Folder In Folder In Folder In Folder In Folder In Folder In Folder In Folder In Folder In Folder ...
echo Folder "open me" will be located in "C:/Users/%username%/Desktop"
pause
cd C:/users/%username%/desktop
:1d
md OpenMe
cd OpenMe
echo :) > Continue-opening!
if errorlevel = 1 goto end
goto 1d

:end
cls
echo Done!
echo Max length reached!
ping local host -n 3
exit
