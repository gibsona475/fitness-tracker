const router = require('express').Router(); 
const path = require('path'); 

router.get("/stats", (req,res) =>{
    //render the stats html file 
    res.sendFile(path.join(__dirname, '../public/stats.html')); 
})

router.get("/exercise", (req,res) =>{
    //render the exercise html file 
    res.sendFile(path.join(__dirname, '../public/exercise.html')); 
})

router.get("*", (req,res) =>{
    //render the exercise html file 
    res.sendFile(path.join(__dirname, '../public/index.html')); 
})

module.exports = router; 
