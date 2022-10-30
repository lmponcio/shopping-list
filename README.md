# shopping-list

This repo is intended for educational purposes.
A single objective, retrieving a shopping list, is achieved using different programming languages.
The intention is to illustrate how the same objective can be achieved in many different ways and help begginers to get familiar with scripting.

## Google App Script
A Google App Script for use at home. It retrieves a shopping list from a products spreadsheet. 

If multiple housemates share the sheet then everyone can modify the amounts needed in ¨All Products¨ sheet. Once everyone is happy, just click the button and items with amount bigger than 0 will be extracted. Please see the demo below:
![](https://github.com/lmponcio/shopping-list/blob/main/images/google-sheet.gif)

This was my first time experimenting with Google App Script (trying to transfer my Excel VBA knowledge into google spreadsheets).
Hopefully someone out there finds this small tool useful - I will be using it at home and maybe improve it in the future.
If any feedback in the way I organized the code I welcome the help - I am happy to learn :).
 
## Python and csv module

In some occasions achieving an objective without installing any module is convenient.
In this case the shopping list is retrieved from the producs.csv file using the built-in module called "csv".
