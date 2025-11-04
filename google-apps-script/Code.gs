function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById('REPLACE_SHEET_ID'); // <-- REMPLACE ICI
    var sh = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
    if (sh.getLastRow() === 0) {
      sh.appendRow([
        'timestamp','name','email','phone','postalCode','consent',
        'utm_source','utm_medium','utm_campaign','utm_term','utm_content',
        'page','referrer'
      ]);
    }
    sh.appendRow([
      data.timestamp, data.name, data.email, data.phone, data.postalCode, data.consent,
      data.utm_source, data.utm_medium, data.utm_campaign, data.utm_term, data.utm_content,
      data.page, data.referrer
    ]);
    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('ERROR: ' + err).setMimeType(ContentService.MimeType.TEXT);
  }
}