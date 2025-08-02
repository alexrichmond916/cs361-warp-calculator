# How To Use This Service

## Starting the Server
1. Using a command line interface, navigate to the folder containing the microservice
2. If this is the first time running the service, the node modules will need to be installed. Enter `npm install`. There will be some warnings about deprecated modules, but nothing that should affect this service functioning.
3. To run, enter `node warp-calculator.js`.

## Requesting Data
1. The service can be reached via an HTTP GET request. I recommend using JavaScript's `fetch()` function to send the request.
2. While running on your computer, the target URL is `http://localhost:${port}/warpCalculator/`, where port is the port you specify at the top of the service code. By default, I've set this to **3010**.
3. The following parameters are required for the calculator to function properly:
  * length:     number      (length of strands in inches)
  * waste:      number      (length of loom waste in inches)
  * ends:       number      (quantity of ends)
  * shrinkage:  number      (percentage representing the shrinkage factor)

## Receiving Data
1. Using the `fetch()` function will return a JSON containing two properties:
   * yardage: number (total number of yards of thread needed)
   * message: string (result of calculator - can help with troubleshooting if something goes wrong)

## Example
1. Within an asynchronous function, use `const response = await fetch(localhost:5000/warpCalculator/?length=60&waste=20&ends=300&shrinkage=10)`
2. Once executed, this will be the value of `response`: `{yardage: 734, message: "Success! Yardage is 734"}`

# UML Diagram

<img width="647" height="561" alt="uml chart" src="https://github.com/user-attachments/assets/249b8a21-97e1-4017-a166-e3d811687d8b" />

# Communication Contract
(this is taken from our contract organized earlier in the quarter)

1. We primarily use Discord to communicate, using Canvas discussion group posts only for required assignment submissions.

2. We are mostly East Coast working professionals. So, we do not expect responses during workday hours.

3. We @tag any specific requests to a particular person if we need a response from them. If we do not receive a response within 36 hours (i.e. the following evening for a message sent in the morning), we will send a reminder with another @tag. When you see an item with an @tag for you, an emoji response does not constitute "a response", but is a good practice to show that you have seen an item and will be responding when you can.

4. If a team member has been unresponsive for 72 hours (36 hours initially + another 36 hours), we will go to our backup plan for implementing microservices.

5. While we may use private DMs on Discord for individual microservice questions, for any "official" questions/responses, we will use our main group chat on Discord so that all team members can have awareness of our progress and any non-responsive team members.
