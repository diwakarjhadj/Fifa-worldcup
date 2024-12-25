# World Cup Finals Data Scraper

This project scrapes data about the FIFA World Cup finals from the Wikipedia page and stores it in an Excel file. The project uses **Axios** for HTTP requests, **Cheerio** for HTML parsing, and **ExcelJS** (or similar) to write the scraped data into an Excel file.

## Technologies Used

- **Axios**: For making HTTP requests.
- **Cheerio**: For parsing HTML.
- **ExcelJS** (or similar): For creating and writing data to Excel.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/diwakarjhadj/Fifa-worldcup
    ```

2. Navigate to the project directory:
    ```bash
    cd worldcup-scraper
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Ensure that the `writeExcelFile` utility is set up in `src/utils/excelHelper.js`.

## Usage

1. Run the server:
    ```bash
    node src/app.js
    ```

2. Access the `/scrape` route to trigger the scraping process:
    ```http
    GET /scrape
    ```

3. The scraped data will be saved in `data/WorldCupFinals.xlsx`.

Example response:
```json
{
  "message": "Data successfully scraped and written to Excel",
  "data": [
    { "Year": "1930", "Winner": "Uruguay", "Score": "4–2", "RunnerUp": "Argentina" },
    ...
  ],
  "file": "./data/WorldCupFinals.xlsx"
}

This version of the `README.md` clearly describes your project structure and provides a concise explanation of the project’s functionality. It includes the appropriate sections like usage, setup instructions, and file descriptions to guide developers who want to work with or contribute to your project.
