const XLSX = require('xlsx');
const fs = require('fs');

const writeExcelFile = (data, filePath) => {
  // Convert JSON data to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'WorldCupFinals');

  // Ensure the data directory exists
  const dir = './data';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Write the workbook to the specified file path
  XLSX.writeFile(workbook, filePath);
};

module.exports = { writeExcelFile };
