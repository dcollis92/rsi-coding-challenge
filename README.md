# RSI Frontend Developer Coding Challenge


# Challenge Summary

This coding challenge is to demonstrate your knowledge and skills of frontend development using [ReactJS](https://reactjs.org/), [Material UI](https://mui.com/), and a table library called [Material-Table](https://material-table.com/#/). 

The objective is to create the application as close to the mockups as possible and to also address as many of the requirements as possible.   

The Material UI theme has already been provided for this project in the **Theme.js** file, please use [Material UI](https://mui.com/) components to build this project.

The table library that will be used for this project will be [Material-Table](https://material-table.com/#/). Please review their documentation to better help you complete the requirements for this project. 

- [Material Table Documentation 1](https://material-table.com/#/)
- [Material Table Documentation 2](https://material-table-core.com/)

When you have completed the project you can either zip up the project and email it back or create a repository for the project on GitHub and send us a link to the repository.

# Set up 

1. cd into client folder `yarn install`

2. `yarn start` to start the React app. 

- If `yarn -v` doesn't work, install [`yarn`](https://yarnpkg.com/en/)
   - `npm install -g yarn`

# Requirements

## Data Loading
- When the user clicks the **SEARCH** button it will load the mock data from the **data.js** file into the table.  

- The table will show **NO RECORDS TO DISPLAY** before the data is loaded.  

- The Search by Affidavit No, Policy No, Batch No, or Insured Name input does **NOT** need to be functional.  

### See Figure 1

---

## Columns

### Display columns and rows for the table using the mock data from the **data.js** file as follows:

Column Name: **Affidavit No**  
Datatype: `string`  
- use the `AFFIDAVITNO` value in the `PARTA_TRANSACTION` object  



Column Name: **Policy No**  
Datatype: `string`  
- use the `POLICYNO` value in the `PARTA_TRANSACTION` object  


Column Name: **Insured Name**  
Datatype: `string`  
- use the `RISKINSUREDNAME` value in the `PARTA_TRANSACTION` object  


Column Name: **Type**  
Datatype: `string`  
- use the `TRANSACTIONTYPE` value in the `PARTA_TRANSACTION` object  


Column Name: **Premium**  
Datatype: `currency`  
- use the `AMOUNT` value in the `PARTA_TRANSACTION` object  
- should include commas when necessary  


Column Name: **Inception**  
Datatype: `date`  
Format: `MM/DD/YYYY`  
- use the `EFFECTIVEDATE` value in the `PARTA_TRANSACTION` object  


Column Name: **Expiration**  
Datatype: `date`  
Format: `MM/DD/YYYY`  
- use the `EXPIRATIONDATE` value in the `PARTA_TRANSACTION` object  


Column Name: **Batch**  
Datatype: `number`  
- use the `BATCHID` value in the `PARTA_TRANSACTION` object  


Column Name: **Submitted**  
Datatype: `date`  
Format: `MM/DD/YYYY`  
- use the `RECIEVEDATE` value in the `PARTA_TRANSACTION` object  


Column Name: **Proc State**  
Datatype: `string`  
- use the `PROCESSEDSTATE` value in the `PARTA_TRANSACTION` object    

- this column will hold the Proc State value and the MoreVert Icon Button that will display a detail card.  


---

## Detail Card
- When the MoreVert Icon Button at the end of each row is clicked it will display details associated with the row.  

### Display the data for the card as follows:  

- The **Affidavit No** will be the card header  

    - use the `AFFIDAVITNO` value in the `PARTA_TRANSACTION` object.  

- The **Company(s)** detail can have multiple values  

    - use the `COMPANY` array in the `PARTA_TRANSACTION` object to build the companies list.  

    - display the `COMPANYNUMBER` - `COMPANYNAME` for each list item  

- The **Coverage** detail will have a single value  

    - use the `COVERAGE` value in the `PARTA_TRANSACTION` object.  

---

## Table Search
- The search bar will be able to filter rows by any column that contains the search term.  

- The search will not be limited to first character of a word the search term can show up any where in the word.  

- Should address `null` values   

### See Figures 3 and 4 

---

## Hide and Show Columns
- The table will have an ViewColumn icon button in the toolbar which will allow the user to add or remove columns from the table.  

- All columns will be shown initially  

### See Figure 5

---

## Export Data
- The table will have a SaveAlt icon button in the toolbar which will allow the user to **Export as PDF** or **Export as CSV**.  

- The export should work for the entire data set not just the first 10 rows.  

- Should address `null` values  

### See Figure 6

---

## Filtering
- The table will have a FilterList icon button in the toolbar which will toggle the column filter row in the table.  

- Typing a value in a column filter should filter the rows that contain the search term in the column.   

- Should address `null` values  

### See Figures 7 - 9

---

## Density
- The table will have a ViewHeadline icon button in the toolbar which will toggle the density of the rows.   

- The table should initially be set to a `normal` density and change to `dense` on first click.  

### See Figures 10 & 11  

---

## Sorting
- Clicking on the Column Header will sort the table by column row.  

- The first click on the Column Header will sort the rows by the selected column in ascending order.  

- The second click on the Column Header will sort the rows by the selected column in descending order.  

- The third click will return the rows to the default order.  

### See Figures 12 & 13  

---

## Rows Per Page
- The default rows per page will be 10.  

- The options for rows per page will be 10, 25, 50, and 100.  

- Choosing a row per page option will change how many rows show up on the page.  

### See Figure 14  

---

# Mockup Figures

![Figure 1](/mockups/Figure1.png)  
*Figure 1* - **No Data**  

![Figure 2](/mockups/Figure2.png)
*Figure 2* - **Detail Card**  

![Figure 3](/mockups/Figure3.png)
*Figure 3* - **Table Search**  

![Figure 4](/mockups/Figure4.png)
*Figure 4* - **Table Search**  

![Figure 5](/mockups/Figure5.png)
*Figure 5* - **Hide & Show Columns**  

![Figure 6](/mockups/Figure6.png)
*Figure 6* - **Export Data**  

![Figure 7](/mockups/Figure7.png)
*Figure 7* - **Show Filters**  

![Figure 8](/mockups/Figure8.png)
*Figure 8* - **Hide Filters**  

![Figure 9](/mockups/Figure9.png)
*Figure 9* - **Filter By Column Action**  

![Figure 10](/mockups/Figure10.png)
*Figure 10* - **Density**  

![Figure 11](/mockups/Figure11.png)
*Figure 11* - **Density**  

![Figure 12](/mockups/Figure12.png)
*Figure 12* - **Sort By Column Ascending**  

![Figure 13](/mockups/Figure13.png)
*Figure 13* - **Sort By Column Descending**  

![Figure 14](/mockups/Figure14.png)
*Figure 14* - **Rows Per Page**  
