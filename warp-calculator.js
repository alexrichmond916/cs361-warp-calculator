/* 
    Warp Calculator microservice. Calculates the total yarn yardage needed for a project based on its paramters.
    Run with "node warp-calculator.js". The service will continue running while terminal is open.
*/

const express = require('express');
const app = express();
const port = 3100;

/* 
    The following route expects 4 query parameters:
    length      number      length of strands in inches
    waste       number      length of loom waste in inches
    ends        number      quantity of ends
    shrinkage   number      percentage representing the shrinkage factor 

    The result is always rounded up.
*/
app.get('/warpcalculator', (req, res) => {
    try {
        const length = parseInt(req.query.length);
        const waste = parseInt(req.query.waste);
        const ends = parseInt(req.query.ends);
        const shrinkage = parseInt(req.query.shrinkage);

        // Test for positive parameters
        // Note: a shrinkage value of 0 is acceptable
        if (length <= 0 || waste <= 0 || ends <= 0){
            res.status(400).json({
                yardage: 0,
                message: `One or more of the parameters (besides shrinkage) is not a positive number.`
            })
        };

        // Calculate shrinkage factor (if provided, otherwise set it to 1)
        const shrinkageFactor = shrinkage ? 1 + (shrinkage / 100) : 1;

        const inchage = ((length + waste) * ends) * shrinkageFactor;
        const yardage = Math.ceil(inchage / 36);

        res.status(200).json({
            yardage: yardage,
            message: `Success! Yardage is ${yardage}`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            yardage: 0,
            message: error
        })
    }
});

// Start listening at port and report that the service is listening
app.listen(port, () => {
    console.log(`Warp calculator microservice is listening at port ${port}`)
})