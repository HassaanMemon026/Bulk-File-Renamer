@echo off
echo --------------------------------------------
echo *** File Rename Script ***
echo --------------------------------------------

set /p replaceThis=Enter the name you want to replace (replace this): 
set /p replaceWith=Enter the new name you want to replace with (replace with): 

echo --------------------------------------------
echo You entered:
echo Replace this: %replaceThis%
echo Replace with: %replaceWith%
echo --------------------------------------------

node ./index.js %replaceThis% %replaceWith%
echo --------------------------------------------
echo Script execution completed.
pause
