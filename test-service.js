/* Testing tool for warp-calculator.js. Run with "node test-service.js" */

const port = 3100;

const queryParams1 = {
    length: 60,
    waste: 20,
    ends: 300,
    shrinkage: 10
};

const queryParams2 = {
    length: 70,
    waste: 15,
    ends: 200,
    shrinkage: 5
};

async function testService(queryParams){
    try {
        
        // Concatenating the query parameters just to simplify the syntax in the fetch function below
        const queryParamsInURL = `length=${queryParams.length}&waste=${queryParams.waste}&ends=${queryParams.ends}&shrinkage=${queryParams.shrinkage}`

        const response = await fetch(`http://localhost:${port}/warpCalculator/?${queryParamsInURL}`)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const output = await response.json();
        
        console.log(output)

    } catch (error) {
        console.log(error)
    }
}

async function runTests(){
    await testService(queryParams1);      // yardage: 734
    await testService(queryParams2);      // yardage: 496
}

runTests();

