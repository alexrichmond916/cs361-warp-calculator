# cs361-warp-calculator

## Starting the Service
1. Using a command line interface, navigate to the folder containing the microservice
2. If this is the first time running the service, the node modules will need to be installed. Enter `npm install`. There will be some warnings about deprecated modules, but nothing that should affect this service functioning.
3. To run, enter `node warp-calculator.js`.

## Requesting Data
1. The service can be reached via an HTTP GET request. I recommend using JavaScript's fetch function to send the request.
2. While running on your computer, the target URL is `http://localhost:${port}/warpCalculator/`, where port is the port you specify at the top of the service code. By default, I've set this to **3010**.
3. The following parameters are required for the calculator to function properly:
  * length:     number      (length of strands in inches)
  * waste:      number      (length of loom waste in inches)
  * ends:       number      (quantity of ends)
  * shrinkage:  number      (percentage representing the shrinkage factor)

## Receiving Data
1. 
