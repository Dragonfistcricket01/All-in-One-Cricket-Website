@echo off
title Cricket Project - All Services
echo Launching your 4 terminals... please wait.

:: 1. Start Node server (Standard)
start cmd /k "cd /d backend && node server.js"

:: 2. Start Node development server (Nodemon)
:: Note: This might show a "Port in use" error if server.js is already running
start cmd /k "cd /d backend && npm run dev"

:: 3. Start Python ML App
start cmd /k "cd /d backend && python app.py"

:: 4. Start React Frontend
start cmd /k "cd /d frontend && npm start"

echo.
echo Everything is running! You can minimize this window.
pause