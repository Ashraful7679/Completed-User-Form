function doGet() {

  const htmlForSidebar = HtmlService.createTemplateFromFile("main");
  return htmlOutput = htmlForSidebar.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  

}

function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  return ws.getRange(2, 1, ws.getLastRow()-1, 24).getValues();
}










function deleteById(id){
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const custIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());  
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
}

function getCustomerById(id){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const custIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());  
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const customerInfo = ws.getRange(rowNumber, 1, 1, 24).getValues()[0];
  
  return { custId : customerInfo[0],
        addC1 : customerInfo[1],
        addC2 : customerInfo[2],
        addC3 : customerInfo[3],
        addC4 : customerInfo[4],
        addC5 : customerInfo[5],
        addC6 : customerInfo[6],
        addC7 : customerInfo[7],
        addC8 : customerInfo[8],
        addC9 : customerInfo[9],
        addC10 : customerInfo[10],
        addC11 : customerInfo[11],
        addC12: customerInfo[12],
        addC13 : customerInfo[13],
        addC14 : customerInfo[14],
        addC15 : customerInfo[15],
        addC16 : customerInfo[16],
        addC17: customerInfo[17],
        addC18 : customerInfo[18],
        addC19 : customerInfo[19],
        addC20 : customerInfo[20],
        addC21 : customerInfo[21],
        addC22 : customerInfo[22],
        addC23 : customerInfo[23],
        addC24 : customerInfo[24] }

}

function editCustomerById(id, customerInfo){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const custIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues().map(r => r[0].toString().toLowerCase());  
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rowNumber, 2,1,24).setValues([[
                                                customerInfo.addC1, 
                                                customerInfo.addC2,
                                                customerInfo.addC3,
                                                customerInfo.addC4, 
                                                customerInfo.addC5,
                                                customerInfo.addC6,
                                                customerInfo.addC7, 
                                                customerInfo.addC8,
                                                customerInfo.addC9,
                                                customerInfo.addC10, 
                                                customerInfo.addC11,
                                                customerInfo.addC12,
                                                customerInfo.addC13, 
                                                customerInfo.addC14,
                                                customerInfo.addC15,
                                                customerInfo.addC16, 
                                                customerInfo.addC17,
                                                customerInfo.addC18,
                                                customerInfo.addC19, 
                                                customerInfo.addC20,
                                                customerInfo.addC21,
                                                customerInfo.addC22, 
                                                customerInfo.addC23,
                                                customerInfo.addC24
                                            ]]);
  return true;

}

function addCustomer(customerInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  const uniqueIds = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();  
  var maxNum = 0;
  uniqueIds.forEach(r => {
          maxNum = r[0] > maxNum ? r[0] : maxNum
         });
  
  var newID = maxNum + 1;
  
  ws.appendRow([
                newID,
                    customerInfo.addC1, 
                    customerInfo.addC2,
                    customerInfo.addC3,
                    customerInfo.addC4, 
                    customerInfo.addC5,
                    customerInfo.addC6,
                    customerInfo.addC7, 
                    customerInfo.addC8,
                    customerInfo.addC9,
                    customerInfo.addC10, 
                    customerInfo.addC11,
                    customerInfo.addC12,
                    customerInfo.addC13, 
                    customerInfo.addC14,
                    customerInfo.addC15,
                    customerInfo.addC16, 
                    customerInfo.addC17,
                    customerInfo.addC18,
                    customerInfo.addC19, 
                    customerInfo.addC20,
                    customerInfo.addC21,
                    customerInfo.addC22, 
                    customerInfo.addC23,
                    customerInfo.addC24
                 ]);
  }
