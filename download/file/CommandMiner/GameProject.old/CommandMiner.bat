:reload
if not exist Command_Miner_Data md Command_Miner_Data
cd Command_Miner_Data
if errorlevel=1 echo Failed to create folder!!! & pause >nul & exit
if not exist Command_Miner_Update md Command_Miner_Update
cd Command_Miner_Update
if errorlevel=1 echo Failed to create folder!!! & pause >nul & exit
if not exist Update.bat echo cd.. ^& cd.. ^& curl https://fireroth.netlify.app/download/file/commandMiner/latest^>CommandMiner.bat ^& cd Command_Miner_Data ^& cd Command_Miner_Update ^& start Updated.vbs ^& exit>Update.bat
if not exist Updated.vbs echo X=MsgBox("Successfully installed latest version (Command Miner)",0+64,"Updated")>Updated.vbs
cd..

set cheats=false
set command=invalid
set cheatPermission=true

if not exist pickaxe.cmd set pickaxe=Wooden
if not exist backpack.cmd set backpack=Wooden
if not exist money.cmd set money=0
if not exist oreAmount.cmd set ore=0
if not exist token.cmd set token=0
if not exist oreName.cmd set oreName=Coal
if not exist commonCrate.cmd set /a commonCrate=0
if not exist uncommonCrate.cmd set /a uncommonCrate=0
if not exist rareCrate.cmd set /a rareCrate=0
if not exist epicCrate.cmd set /a epicCrate=0
if not exist legendaryCrate.cmd set /a legendaryCrate=0

call backpack.cmd
call pickaxe.cmd
call money.cmd
call oreAmount.cmd
call token.cmd
call oreName.cmd
call commonCrate.cmd
call uncommonCrate.cmd
call rareCrate.cmd
call epicCrate.cmd
call legendaryCrate.cmd



@echo off
mode con cols=120 lines=30


:main
echo 				---------------------------------------------
echo.
echo                  				Command Miner
echo.
echo 				---------------------------------------------
echo.
echo.
echo Use "help" for list of all available commands
echo Use "save" to save your progress

:cmdselect

if %oreName%==Coal set /a multi=1
if %oreName%==Iron set /a multi=1
if %oreName%==Lapis set /a multi=2
if %oreName%==Gold set /a multi=2
if %oreName%==Diamond set /a multi=3
if %oreName%==Emerald set /a multi=4

if %orename% == Diamond set /a upOrePrice=5
if %orename% == Gold set /a upOrePrice=4
if %orename% == Lapis set /a upOrePrice=3
if %orename% == Iron set /a upOrePrice=2
if %orename% == Coal set /a upOrePrice=1

if %pickaxe% == Diamond set /a upPickPrice=5000
if %pickaxe% == Golden set /a upPickPrice=3500
if %pickaxe% == Iron set /a upPickPrice=2000
if %pickaxe% == Stone set /a upPickPrice=750
if %pickaxe% == Wooden set /a upPickPrice=250

if %pickaxe% == Wooden set maxMined=10
if %pickaxe% == Stone set maxMined=20
if %pickaxe% == Iron set maxMined=40
if %pickaxe% == Golden set maxMined=60
if %pickaxe% == Diamond set maxMined=80
if %pickaxe% == Emerald set maxMined=100


if %backpack% == Wooden set maxBPSize=25
if %backpack% == Stone set maxBPSize=75
if %backpack% == Iron set maxBPSize=150
if %backpack% == Golden set maxBPSize=250
if %backpack% == Diamond set maxBPSize=500
if %backpack% == Emerald set maxBPSize=700

if %backpack% == Diamond set /a upBPPrice=5000
if %backpack% == Golden set /a upBPPrice=3500
if %backpack% == Iron set /a upPBPPrice=2000
if %backpack% == Stone set /a upBPPrice=750
if %backpack% == Wooden set /a upBPPrice=250

title Command Miner      Money: %money%^$      Tokens: %token%      Pickaxe: %pickaxe%      Backpack: %backpack%      Ore: %orename%
echo.
set /p command=Enter command:
if %command% == mine goto mine
if %command% == sell goto sell
if %command% == invalid echo Please enter valid command!
if %command% == stats goto stats
if %command% == clear cls
if %command% == shop goto shop
if %command% == boostshop goto boostshop
if %command% == upgradepickaxe goto upgradePick
if %command% == reload cls & cd.. & goto reload
if %command% == help goto help
if %command% == bshop goto bpshop
if %command% == upgradebackpack goto upgradebp
if %command% == save goto saveProgress
if %command% == balance goto balance
if %command% == rebirth goto rebirth
if %command% == cheat echo Invalid syntax, use cheat_CHEATNAME & goto cmdselect
if %command% == cheat_ echo Invalid syntax, use cheat_CHEATNAME & goto cmdselect
if %command% == savecheck goto saveCheck
if %command% == reset goto resetConfirm
if %command% == upgradeore goto upgradeore
if %command% == ore goto oreInfo
if %command% == ores goto oreInfo
if %command% == oreinfo goto oreInfo
if %command% == opencommon goto openCrateCommon
if %command% == openuncommon goto openCrateUnommon
if %command% == openrare goto openCrateRare
if %command% == openepic goto openCrateEpic
if %command% == openlegendary goto openCrateLegendary
if %command% == crates goto allCrates
if %command% == update goto Update

REM Aliases
if %command% == m goto mine
if %command% == s goto sell
if %command% == c cls
if %command% == cls cls
if %command% == bshop goto boostshop
if %command% == ps goto shop
if %command% == bs goto boostshop
if %command% == up goto upgradePick
if %command% == upp goto upgradePick
if %command% == uppick goto upgradePick
if %command% == upick goto upgradePick
if %command% == rl cls & cd.. & goto reload
if %command% == ub goto upgradebp
if %command% == upb goto upgradebp
if %command% == ubackpack goto upgradebp
if %command% == upgradepick goto upgradepick
if %command% == upickaxe goto upgradepick
if %command% == upgradebp goto upgradebp
if %command% == bal goto balance
if %command% == uo goto upgradeore
if %command% == uore goto upgradeore
if %command% == upore goto upgradeore
if %command% == oc goto openCrateCommon
if %command% == ou goto openCrateUncommon
if %command% == or goto openCrateRare
if %command% == oe goto openCrateEpic
if %command% == ol goto openCrateLegendary
if %command% == ocommon goto openCrateCommon
if %command% == ouncommon goto openCrateUnommon
if %command% == orare goto openCrateRare
if %command% == oepic goto openCrateEpic
if %command% == olegendary goto openCrateLegendary

REM cheats
if %command% == cheat_moremoney if %cheatPermission%==false (goto noPerms) else set /a money=%money%+2500 & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect
if %command% == cheat_bestpickaxe if %cheatPermission%==false (goto noPerms) else set pickaxe=Emerald & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect
if %command% == cheat_bestbackpack if %cheatPermission%==false (goto noPerms) else set backpack=Emerald & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect
if %command% == cheat_moretokens if %cheatPermission%==false (goto noPerms) else set /a token=%token%+5 & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect
if %command% == cheat_bestore if %cheatPermission%==false (goto noPerms) else set oreName=Emerald & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect
if %command% == cheat_givemecrates if %cheatPermission%==false (goto noPerms) else set /a commonCrate=%commonCrate%+3 & set /a uncommonCrate=%uncommonCrate%+3 & set /a rareCrate=%rareCrate%+3 & set /a epicCrate=%epicCrate%+3 & set /a legendaryCrate=%legendaryCrate%+3 & set cheats=true & set command=invalid & echo Cheat activated & goto cmdselect

goto cmdselect


:sell
if %ore%==0 goto noOre
set /a transfer=%ore%*%multi%
set /a money=%money%+(%ore%*%multi%)
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo You sold %ore% %orename% for %transfer%^$
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
set /a ore=0
set command=invalid
goto cmdselect


:mine
if %ore% GTR %maxBPSize% goto maxBackPack

set /a crateChance=%random% %% 50
if %crateChance%==25 set /a commonCrate=%commonCrate%+1 & echo You got 1 Common crate!

set /a crateChance1=%random% %% 75
if %crateChance1%==55 set /a uncommonCrate=%uncommonCrate%+1 & echo You got 1 Uncommon crate!

set /a crateChance2=%random% %% 150
if %crateChance2%==122 set /a rareCrate=%rareCrate%+1 & echo You got 1 Rare crate!

set /a crateChance3=%random% %% 300
if %crateChance3%==185 set /a epicCrate=%epicCrate%+1 & echo You got 1 Epic crate!

set /a crateChance4=%random% %% 500
if %crateChance4%==468 set /a legendaryCrate=%legendaryCrate%+1 & echo You got 1 Legendary crate!

set /a oremined=%random% %% %maxMined%
set /a ore=%ore% + %oremined%
echo You mined %oremined% %orename%.
echo Now you have %ore% %orename%.
set command=invalid
goto cmdselect


:upgradePick

if %pickaxe%== Emerald goto maxLevelPick

if %pickaxe% == Diamond set nextpickaxe=Emerald
if %pickaxe% == Golden set nextpickaxe=Diamond
if %pickaxe% == Iron set nextpickaxe=Golden
if %pickaxe% == Stone set nextpickaxe=Iron
if %pickaxe% == Wooden set nextpickaxe=Stone

if %money% LSS %upPickPrice% goto lowMoney
set /a money=%money%-%upPickPrice% & set pickaxe=%nextPickaxe%
echo You successfully bought %nextpickaxe% pickaxe.

goto cmdselect


:upgradeOre

if %orename% == Emerald goto maxLevelOre

if %orename% == Diamond set nextore=Emerald
if %orename% == Gold set nextore=Diamond
if %orename% == Lapis set nextore=Gold
if %orename% == Iron set nextore=Lapis
if %orename% == Coal set nextore=Iron

if %token% LSS %upOrePrice% goto lowToken
set /a token=%token%-%upOrePrice% & set orename=%nextOre%
echo You successfully bought %nextore% ore.

goto cmdselect


:upgradeBP
if %backpack%== Emerald goto maxLevelBP

if %backpack% == Diamond set nextbp=Emerald
if %backpack% == Golden set nextbp=Diamond
if %backpack% == Iron set nextbp=Golden
if %backpack% == Stone set nextbp=Iron
if %backpack% == Wooden set nextbp=Stone

if %money% LSS %upBPPrice% goto lowMoney
set /a money=%money%-%upBPPrice% & set backpack=%nextBP%
echo You successfully bought %nextbp% backpack.
goto cmdselect


:shop
echo.
echo Stone = 250^$
echo Iron = 750^$
echo Golden = 2 000^$
echo Diamond = 3 500^$
echo Emerald = 5 000^$
goto cmdselect


:stats
echo.
echo Pickaxe: %pickaxe%
echo Backpack: %backpack%
echo Money: %money%^$
echo Tokens: %token%
echo %orename%: %ore%
set /a totalCrates=%commonCrate%+%uncommonCrate%+%rareCrate%+%epicCrate%+%legendaryCrate%
echo Crates in total: %totalCrates%
goto cmdselect


:lowMoney
set /a needMoreMoney=%upPickPrice%-%money%
echo You don't have enough money!
echo You need %needMoreMoney%^$ more for next upgrade!
goto cmdselect


:lowToken
set /a needMoreToken=%upOrePrice%-%token%
echo You don't have enough tokens!
echo You need %needMoreToken% token(s) more for next upgrade!
goto cmdselect


:maxLevelPick
echo You have the max level of you pickaxe.
goto cmdselect


:maxLevelBP
echo You have the max level of you backpack.
goto cmdselect


:maxLevelOre
echo You have the max level of your ore.
goto cmdselect


:noOre
echo You don't have any %orename% that you can sell.
goto cmdselect


:oreInfo
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo Coal = 1x sell price
echo Iron = 1x sell price
echo Lapis = 2x sell price
echo Gold = 2x sell price
echo Diamond = 3x sell price
echo Emerald = 4x sell price
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
goto cmdselect


:help
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo mine = Mine ores
echo sell = Sell ores that you mined
echo upgradepick = Upgrade your pickaxe
echo upgradebp = Upgrade your backpack
echo upgradeore = Upgrade your ore
echo clear = Clear your screen
echo reload = Reload Command Miner
echo shop = Upgrade prices
echo save = Save your progress
echo oreinfo = Info about ores
echo crates = Shows how many crates you have
echo ocommon = Open common crate
echo ouncommon = Open uncommon crate
echo orare = Open rare crate
echo oepic = Open epic crate
echo olegendary = Open legendary crate
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
goto cmdselect


:maxBackpack
echo You have full backpack.
echo Use "sell" or "s" to make free space in your bp.
goto cmdselect


:saveProgress
if %cheats%==true goto saveCheats
echo set backpack=%backpack% > backpack.cmd
echo set pickaxe=%pickaxe% > pickaxe.cmd
echo set /a money=%money% > money.cmd
echo set /a ore=%ore% > oreAmount.cmd
echo set /a token=%token% > token.cmd
echo set oreName=%oreName% > oreName.cmd
echo set /a commonCrate=%commonCrate% > commonCrate.cmd
echo set /a uncommonCrate=%uncommonCrate% > uncommonCrate.cmd
echo set /a rareCrate=%rareCrate% > rareCrate.cmd
echo set /a epicCrate=%epicCrate% > epicCrate.cmd
echo set /a legendaryCrate=%legendaryCrate% > legendaryCrate.cmd

echo Saved!
goto cmdselect


:saveCheck
echo.
type backpack.cmd
type pickaxe.cmd
type money.cmd
type token.cmd
type oreAmount.cmd
type oreName.cmd
goto cmdselect


:saveCheats
echo You can't save your game if you used cheats
echo Use "reload" or "rl" to load your last saved position
goto cmdselect


:balance
echo.
echo Money: %money%^$
echo Tokens: %token%
goto cmdselect


:rebirth
if not %pickaxe%==Emerald goto rebirthFail
if not %backpack%==Emerald goto rebirthFail
set /a token=%token%+1
set pickaxe=Wooden
set backpack=Wooden
set money=0
set ore=0
set commonCrate=0
set uncommonCrate=0
set rareCrate=0
set epicCrate=0
set legendaryCrate=0
echo Rebirth was successful
echo You got 1 token
goto cmdselect


:rebirthFail
echo You need to have Emerald backpack and pickaxe!
echo You only have %pickaxe% pickaxe and %backpack% backpack
goto cmdselect


:resetConfirm
echo Are you sure you want to start over? (y/n)
set command=invalid
set /p resetNY=
if %resetNY%==y goto reset
if %resetNY%==n goto cmdselect
goto resetConfirm


:reset
set money=0
set token=0
set pickaxe=Wooden
set backpack=Wooden
set ore=0
set orename=Coal
set commonCrate=0
set uncommonCrate=0
set rareCrate=0
set epicCrate=0
set legendaryCrate=0

cls
echo Done, reset was successful
goto main


:openCrateCommon
set crateName=Common
if %commonCrate%==0 goto noCrate
set /a randomMoney=%random% %% 200
if %randomMoney% GTR 150 set randomMoney=0
set /a commonCrate=%commonCrate%-1
echo You got %randomMoney%^$
set /a money=%money%+%randomMoney%
if %randomMoney%==0 echo Sorry but you get unlucky this time :(
goto cmdselect


:openCrateUncommon
set crateName=Uncommon
if %uncommonCrate%==0 goto noCrate
set /a randomMoney=%random% %% 325
if %randomMoney% GTR 250 set randomMoney=0
set /a uncommonCrate=%uncommonCrate%-1
echo You got %randomMoney%^$
set /a money=%money%+%randomMoney%
if %randomMoney%==0 echo Sorry but you get unlucky this time :(
goto cmdselect


:openCrateRare
set crateName=Rare
if %rareCrate%==0 goto noCrate
set /a randomMoney=%random% %% 500
if %randomMoney% GTR 400 set randomMoney=0
set /a rareCrate=%rareCrate%-1
echo You got %randomMoney%^$
set /a money=%money%+%randomMoney%
if %randomMoney%==0 echo Sorry but you get unlucky this time :(
goto cmdselect


:openCrateEpic
set crateName=Epic
if %epicCrate%==0 goto noCrate
set /a randomMoney=%random% %% 650
if %randomMoney% GTR 550 set randomMoney=0
set /a epicCrate=%epicCrate%-1
echo You got %randomMoney%^$
set /a money=%money%+%randomMoney%
if %randomMoney%==0 echo Sorry but you get unlucky this time :(
goto cmdselect


:openCrateLegendary
set crateName=Legendary
if %legendaryCrate%==0 goto noCrate
set /a randomMoney=%random% %% 850
if %randomMoney% GTR 750 set randomMoney=0
set /a legendaryCrate=%legendaryCrate%-1
echo You got %randomMoney%^$
set /a money=%money%+%randomMoney%
if %randomMoney%==0 echo Sorry but you get unlucky this time :(
goto cmdselect


:noCrate
echo You dont have any %crateName% crates!
goto cmdselect

:allCrates
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo Common:%commonCrate%
echo Uncommon:%uncommonCrate%
echo Rare:%rareCrate%
echo Epic:%epicCrate%
echo Legendary:%legendaryCrate%
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
goto cmdselect


:noPerms
echo You don't have permission for that command!
goto cmdselect

:update
echo.
echo Are you sure you want to download latest version of Command Miner 
echo from https://fireroth.netlify.app/download/file/commandMiner/latest?
echo (Y/N)
set /p UpdateYOrN=
if %updateYOrN%==y (cd Command_Miner_Update & start /min Update.bat & exit) else goto cmdselect


