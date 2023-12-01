var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties() //this is used to store the spreadsheet id

function intialSetup () {  //initial setup of the spreadsheet used to store the data
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) { //this is the main function used to store the data. here e is used to get the data from the form
  var lock = LockService.getScriptLock() //this is used to prevent multiple people from accessing the spreadsheet at the same time
  lock.tryLock(10000) //this is the time in milliseconds that the script will wait for the lock to be available

  try { //this is used to catch any errors that may occur
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key')) //this is used to open the spreadsheet
    var sheet = doc.getSheetByName(sheetName) //this is used to get the sheet

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] //this is used to get the headers of the sheet
    var nextRow = sheet.getLastRow() + 1 //this is used to get the next row to be used

    var newRow = headers.map(function(header) { //this is used to get the data from the form and store it in the spreadsheet
      return header === 'timestamp' ? new Date() : e.parameter[header] 
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService //this is used to return the data to the form so that it can be displayed
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow })) //this is used to return the data to the form and to make it json
      .setMimeType(ContentService.MimeType.JSON) 
  }

  catch (e) { //this is used to catch any errors that may occur and return the error to the form
    return ContentService //this is used to return the data to the form if an error occurs in the script
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally { //this is used to make sure that the lock is released
    lock.releaseLock()
  }
}










// const sheetName = 'Sheet1'
// const scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   const lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     const sheet = doc.getSheetByName(sheetName)

//     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     const nextRow = sheet.getLastRow() + 1

//     const newRow = headers.map(function(header) {
//       return header === 'Date' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])




//      return ContentService
//     .createTextOutput("Success")
//    .setMimeType(ContentService.MimeType.JSON)
//      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//      .setMimeType(ContentService.MimeType.JSON)
//   }

//  catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     //lock.releaseLock()
//   }
// }
