@echo off
cd errors
if errorlevel=1 goto error500
title Errors
cls
echo To stop restart your Menu.
:mainERR
start AnnoyError.vbs & ping localhost -n 2 >nul
start ForgtWarn.vbs & ping localhost -n 2 >nul
start openerror.vbs & ping localhost -n 4 >nul
start virusdetected.vbs & ping localhost -n 3 >nul
start openerror & ping localhost -n 3 >nul
start usererror.vbs & ping localhost -n 3 >nul
start noerror.vbs & ping localhost -n 2 >nul
start mouseerror & ping localhost -n 4 >nul
start keyboarderror.vbs & ping localhost -n 3 >nul
start errorerror.vbs & ping localhost -n 3 >nul
start PrinterError.vbs & ping localhost -n 3 >nul
start BlankError.vbs & ping localhost -n 3 >nul
start Success.vbs & ping localhost -n 3 >nul
start TaskFailed.vbs & ping localhost -n 3 >nul
goto mainERR