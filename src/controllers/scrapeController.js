const axios=require('axios');
const cheerio=require('cheerio');
const {writeExcelFile}=require('../utils/excelHelper');
const url = 'https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals';
const scrapeData=async(req,res)=>{
    try{
         // Fetch the HTML from the webpage
    const { data } = await axios.get(url);

    // Load HTML into Cheerio
    const $ = cheerio.load(data);

    // Select the table containing the relevant data
    const table = $('#mw-content-text .wikitable tbody');
    const worldCupFinals = [];
    let count = 0;

    // Loop through rows and extract data
    table.find('tr').each((index, row) => {
      const yearColumn = $(row).find('th');
      const columns = $(row).find('td');

      if (yearColumn.length > 0 && columns.length >= 4) {
        const year = yearColumn.text().trim();
        const winner = $(columns[0]).text().trim();
        const score = $(columns[1]).text().trim();
        const runnerUp = $(columns[2]).text().trim();

        worldCupFinals.push({ Year: year, Winner: winner, Score: score, RunnerUp: runnerUp });
        count++;
        if (count >= 10) return false; // Break after 10 rows
      }
    });

    // Write data to an Excel file
    const filePath = './data/WorldCupFinals.xlsx';
    writeExcelFile(worldCupFinals, filePath);

    // Respond with success
    res.json({
      message: 'Data successfully scraped and written to Excel',
      data: worldCupFinals,
      file: filePath,
    });
    }
    catch(err){
        console.error("Error Scrape Data::",err);
        res.status(500).json({error: "Failed to Scrape Data"});
    }
};
module.exports={scrapeData};