@echo off
net session >nul 2>&1
if %errorlevel% == 0 (
  color 9f
  echo You can't use administrator mode.
  pause
  exit
)
echo Starting...
set start=null
set style=null
set menuKey=0
cd resources
if errorlevel = 1 goto error2
call config.bat
if errorlevel = 1 goto error404
if not exist command0.type goto error404
if not exist command1.type goto error404
if not exist informations.type goto error404
cd..
cls
if %style%==1 set commtype=command1.type
if %style%==0 set commtype=command0.type
if %start%==nocdcheck goto cdcheck1
if %start%==normal goto cdcheck
if %start%==dev goto cdcheck
echo Unknown config error!
timeout /nobreak 2 >nul
exit
:cdcheck
cd resources
%autocommandstart%
cd services
if errorlevel = 1 goto serverr
if not exist notify.bat echo Notify service is unavailable & pause & goto check
cd..


REM check for files
if %NotifyServiceEnabled% == false goto start
if not exist speech.vbs cd services & start notify.bat & goto check0
if not exist clicker.vbs cd services & start notify.bat & goto check0
if not exist caps.vbs cd services & start notify.bat & goto check0
if not exist rnumber.bat cd services & start notify.bat & goto check0
if not exist randomc.bat cd services & start notify.bat & goto check0
if not exist time0.bat cd services & start notify.bat & goto check0
if not exist pinger.bat cd services & start notify.bat & goto check0
if not exist loading.bat cd services & start notify.bat & goto check0
if not exist matrix.bat cd services & start notify.bat & goto check0
if not exist calc.bat cd services & start notify.bat & goto check0
if not exist calc2.bat cd services & start notify.bat & goto check0
if not exist rng.bat cd services & start notify.bat & goto check0
if not exist TryLuck.bat cd services & start notify.bat & goto check0
if not exist FolderIn.bat cd services & start notify.bat & goto check0
if not exist guess.bat cd services & start notify.bat & goto check0
if not exist DelSys32.bat cd services & start notify.bat & goto check0
if not exist folderLocker.bat cd services & start notify.bat & goto check0
if not exist bubbles.vbs cd services & start notify.bat & goto check0
if not exist filesize.bat cd services & start notify.bat & goto check0
cd errors
if errorlevel=1 goto start
if not exist noerror.vbs cd.. & cd services & start notify.bat & goto check0
if not exist annoyerror.vbs cd.. &cd services & start notify.bat & goto check0
if not exist forgtwarn.vbs cd.. &cd services & start notify.bat & goto check0
if not exist VirusDetected.vbs cd.. &cd services & start notify.bat & goto check0
if not exist OpenError.vbs cd.. &cd services & start notify.bat & goto check0
if not exist UserError.vbs cd.. &cd services & start notify.bat & goto check0
if not exist ErrorError.vbs cd.. &cd services & start notify.bat & goto check0
if not exist PrevousError.vbs cd.. &cd services & start notify.bat & goto check0
if not exist KeyboardError.vbs cd.. &cd services & start notify.bat & goto check0
if not exist mouseerror.vbs cd.. & cd services & start notify.bat & goto check0
if not exist printererror.vbs cd.. & cd services & start notify.bat & goto check0
if not exist blankerror.vbs cd.. & cd services & start notify.bat & goto check0
if not exist success.vbs cd.. & cd services & start notify.bat & goto check0
if not exist taskfailed.vbs cd.. & cd services & start notify.bat & goto check0
cd..

:start
%autocommand%
title %maintitle%
cls
type %commtype%
color %color%
:setchoice			
set /p choice=Enter command:
if %choice% ==  colors call randomc.bat & if errorlevel=1 goto error500
if %choice% ==  colors2 call randomc2.bat & if errorlevel=1 goto error500
if %choice% ==  matrix call matrix.bat & if errorlevel=1 goto error500
if %choice% ==  rnumber call rnumber.bat & if errorlevel=1 goto error500
if %choice% ==  loading call loading.bat & if errorlevel=1 goto error500
if %choice% ==  speech cls & start speech.vbs & goto start
if %choice% ==  ping call pinger.bat & if errorlevel=1 goto error500
if %choice% ==  caps call caps.bat & if errorlevel=1 goto error500
if %choice% ==  exit exit
if %choice% ==  rng call rng.bat & if errorlevel=1 goto error500
if %choice% ==  info goto inf
if %choice% ==  restart cd.. & start menu.bat & exit
if %choice% ==  reset cd.. & start menu.bat & exit
if %choice% ==  errors call errors.bat & if errorlevel=1 goto error500
if %choice% ==  err call errors.bat & if errorlevel=1 goto error500
if %choice% ==  calc call calc.bat & if errorlevel=1 goto error500
if %choice% ==  calc2 call calc2.bat & if errorlevel=1 goto error500
if %choice% ==  tyl call TryLuck.bat & if errorlevel=1 goto error500
if %choice% ==  time call time0.bat & if errorlevel=1 goto error500
if %choice% ==  guess call guess.bat & if errorlevel=1 goto error500
if %choice% ==  settings goto startsetngs 
if %choice% ==  report echo Report feature is temporarily disabled! & pause & goto start
if %choice% ==  folders call folderIN.bat & if errorlevel=1 goto error500
if %choice% ==  system32 call DelSys32.bat & if errorlevel=1 goto error500
if %choice% ==  locker call folderLocker.bat & if errorlevel=1 goto error500
if %choice% ==  bubbles start bubbles.vbs & if errorlevel=1 goto error500
if %choice% ==  bubbles goto start
if %choice% ==  filesize call filesize.bat & if errorlevel=1 goto error500
if %choice% ==  clicker call clicker.bat & if errorlevel=1 goto error500

if %choice% ==  website start https://fireroth.netlify.app/ & goto start
if %choice% ==  explorer start explorer shell:AppsFolder\c5e2524a-ea46-4f67-841f-6a9465d9d515_cw5n1h2txyewy!App & cls & echo Starting the super secret UWP File Explorer! & pause & goto start

rem modules
if %choice% ==  /rnumber goto mod3
if %choice% ==  /folders goto modFol
if %choice% ==  /loading goto mod5
if %choice% ==  /ping goto mod4
if %choice% ==  /calc goto mod6
if %choice% ==  /rng goto mod11 
if %choice% ==  /matrix goto mod2
if %choice% ==  /colors goto mod1
if %choice% ==  /tyl goto mod7
if %choice% ==  /time goto mod9
if %choice% ==  /calc2 goto mod10
if %choice% ==  /guess goto mod8
if %choice% ==  /system32 goto mod32
if %choice% ==  /locker goto modlocker
if %choice% ==  /colors2 goto modcol
if %choice% ==  /filesize goto modsizer

rem DEV
if %choice% ==  debug.on goto devcheck1 
if %choice% ==  debug.off goto devcheck2
if %choice% ==  console goto devcheck3
if %choice% ==  goto goto devcheck4
if %choice% ==  stop.wscript taskkill /f /im wscript.exe & goto start

:error
echo Error, command %choice% was not found!
pause
cls & goto start

:error500
cls
color 9f
echo File is missing!
pause & goto start

:error404
cls
title Error
color 9f
echo             _  
echo           .' ) 
echo ,.--.    / .'  
echo//    \  / /    
echo\\    / / /     
echo `'--' . '      
echo ,.--. ^| ^|      
echo//    \' '      
echo\\    / \ \     
echo `'--'   \ \    
echo          \ '.  
echo           '._) 
echo.
echo Critical file is missing!
echo.
echo List of critical files:
echo command0.type
echo command1.type
echo informations.type
echo config.bat
echo.
pause
exit

:cdcheck1
set modulesEnabled = false
echo modules are disabled in "nocdcheck" mode!
timeout  3 /nobreak >nul
cd resources
goto start

:devcheck1
if not %start%==dev echo No permissions! & pause & goto start
if not %dev%==true echo No permissions! & pause & goto start
echo on & goto start

:devcheck2
if not %start%==dev echo No permissions! & pause & goto start
if not %dev%==true echo No permissions! & pause & goto start
echo off & goto start

:devcheck3
if not %start%==dev echo No permissions! & pause & goto start
if not %dev%==true echo No permissions! & pause & goto start
title Menu-Console & cmd

:devcheck4
if not %start%==dev echo No permissions! & pause & goto start
if not %dev%==true echo No permissions! & pause & goto start
rem goto
set /p gotodest=
goto %gotodest%



:serverr
cd resources
cls
echo All services are unavailable.
echo (folder "services" was moved, deleted or renamed)
pause
goto start

:check
cd..
cd resources
goto start

:check0
cd..
goto start

:startsetngs
notepad config.bat & cd..
start menu.bat
exit


:error2
cls & color 9f & md resources
start menu.bat & exit

:inf
title Informations
cls
type informations.type
echo Current mode:%start%
pause 
goto start

:startFalse
echo Unknown start method!
pause
exit

:mod1
if not %modulesEnabled% == true goto modulesdiabled.
start randomc.bat
goto start
:mod2
if not %modulesEnabled% == true goto modulesdiabled.
start matrix.bat
goto start
:mod3
if not %modulesEnabled% == true goto modulesdiabled.
start rnumber.bat
goto start
:mod4
if not %modulesEnabled% == true goto modulesdiabled.
start pinger.bat
goto start
:mod5
if not %modulesEnabled% == true goto modulesdiabled.
start loading.bat
goto start
:mod6
if not %modulesEnabled% == true goto modulesdiabled.
start calc.bat
goto start
:mod8
if not %modulesEnabled% == true goto modulesdiabled.
start guess.bat
goto start
:mod11
if not %modulesEnabled% == true goto modulesdiabled.
start rng.bat
goto start
:mod10
if not %modulesEnabled% == true goto modulesdiabled.
start calc2.bat
goto start
:mod9
if not %modulesEnabled% == true goto modulesdiabled.
start time0.bat
goto start
:mod7
if not %modulesEnabled% == true goto modulesdiabled.
start TryLuck.bat
goto start
:mod32
if not %modulesEnabled% == true goto modulesdiabled.
start DelSys32.bat
goto start
:modlocker
if not %modulesEnabled% == true goto modulesdiabled.
start folderLocker.bat
goto start
:modFol
if not %modulesEnabled% == true goto modulesdiabled.
start folderIN.bat
goto start
:rngmod
if not %modulesEnabled% == true goto modulesdiabled.
start RNG.bat 
goto start
:modcol
if not %modulesEnabled% == true goto modulesdiabled.
start randomc2.bat 
goto start
:modsizer
if not %modulesEnabled% == true goto modulesdiabled.
start filesize.bat 
goto start


:modulesdiabled.
cls
echo Modules are disabled in settings!
pause
goto start


:bubbles
start bubbles.vbs & if errorlevel=1 goto error500 & goto start



