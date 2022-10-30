/**
 * ShoppingList - A Project by Martin Poncio - https://github.com/lmponcio
 * 
 * A Google App Script for use at home. It retrieves a shopping list from a products spreadsheet.
 *
 * TODOs:
 *  Batch function to insert images into cells from folder
 *  Aditional features for user to activate/deactivate at will (in-cell dropdown list):
 *    Event listener when Shopping list tab is clicked function gets executed
 *    Event listener when Get Shopping list button is clicked copy shopping list to clipboard
 *  Save history in hidden sheet (it would be cool in the future to be able to extract this info and know what we bought throughout a year)
*/

function getShoppingList() {
  /**
   * Copies items information into 'Shopping list' sheet when amount>0 .
   */

  // emptying old shopping list
  emptyShoppingList()

  // spreadsheet object (full file)
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // "All products" sheet
  var sheetAllProducts = ss.getSheetByName('All products');
  var allProductsLastRow = sheetAllProducts.getLastRow();
  var allProductsRange = sheetAllProducts.getRange(2,1,allProductsLastRow-1,3); 
  var cellsValues = allProductsRange.getValues();

  // "Shopping list" sheet
  var sheetShoppingList = ss.getSheetByName('Shopping List');

  // Loop
  var shoppingRow = 2
  for (rangeRow = 0; rangeRow <= allProductsLastRow - 2; rangeRow = rangeRow + 1) {
    productAmount = cellsValues[rangeRow][2];
    if (productAmount > 0) {
      productName = cellsValues[rangeRow][1];    
      productCell = sheetShoppingList.getRange(shoppingRow, 2);
      productCell.setValue(productName);
      productCell.setHorizontalAlignment("left");
      amountCell = sheetShoppingList.getRange(shoppingRow, 3);
      amountCell.setValue(productAmount);      
      amountCell.setHorizontalAlignment("center");
      sheetAllProducts.getRange(rangeRow+2,1).copyTo(sheetShoppingList.getRange(shoppingRow, 1));
      shoppingRow = shoppingRow + 1
    } 
  }
}

function emptyShoppingList(){
  /**
   * Removes old 'Shopping list' sheet products.
   */

  // spreadsheet object (full file)
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // "Shopping list" sheet
  var sheetShoppingList = ss.getSheetByName('Shopping List');
  var shoppingListLastRow = sheetShoppingList.getLastRow();

  // only clear contents if at least one old product present 
  if (shoppingListLastRow > 1) {
    var shoppingListRange = sheetShoppingList.getRange(2,1,shoppingListLastRow-1,3);
    shoppingListRange.clear();
  }  
}
