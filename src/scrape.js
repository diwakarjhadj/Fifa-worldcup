// const axios = require('axios');
// const cheerio = require('cheerio');
// const XLSX = require('xlsx');

// // The Wikipedia URL
// const url = 'https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals';

// async function scrapeWorldCupData() {
//   try {
//     // Fetch HTML content of the page using axios
//     const { data } = await axios.get(url);
    
//     // Load the HTML content into cheerio
//     const $ = cheerio.load(data);
    
//     // Select the table containing the relevant data
//     const table = $('#mw-content-text .wikitable tbody');
    
//     // Array to store extracted World Cup finals data
//     const worldCupFinals = [];
//     let count = 0; // Counter to track the number of rows processed

//     // Loop through each row in the table and extract data
//     table.find('tr').each((index, row) => {
//       // Select all the columns (th + td) in the current row
//       const yearColumn = $(row).find('th'); // Year is in <th>
//       const columns = $(row).find('td'); // Winner, Score, and Runner-Up are in <td>
      
//       // Skip rows without enough columns (ensure valid data rows)
//       if (yearColumn.length > 0 && columns.length >= 4) {
//         const year = yearColumn.text().trim(); // Year
//         const winner = $(columns[0]).text().trim(); // Winner
//         const score = $(columns[1]).text().trim(); // Score
//         const runnerUp = $(columns[2]).text().trim(); // Runner-Up
        
//         // Push the extracted data into the array
//         worldCupFinals.push({ Year: year, Winner: winner, Score: score, RunnerUp: runnerUp });

//         count++; // Increment the counter
//         if (count >= 10) {
//           return false; // Break out of the loop after 10 rows
//         }
//       }
//     });

//     // Output the scraped data
//     console.log(worldCupFinals);

//     // Convert the data into a worksheet
//     const worksheet = XLSX.utils.json_to_sheet(worldCupFinals);

//     // Create a new workbook and append the worksheet
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'WorldCupFinals');

//     // Write the workbook to a file
//     const outputFileName = 'WorldCupFinals.xlsx';
//     XLSX.writeFile(workbook, outputFileName);

//     console.log(`First 10 rows of data successfully written to ${outputFileName}`);
//   } catch (error) {
//     console.error('Error scraping data:', error);
//   }
// }

// // Run the scraping function
// scrapeWorldCupData();
