const express=require('express');
const scrapeRoutes=require('../src/routes/scrape');
const app=express();
const PORT=3000;
app.use(express.json());
app.use('/api',scrapeRoutes);
app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`);
});
