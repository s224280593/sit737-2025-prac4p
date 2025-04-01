**Description**

This microservice is built using Node.js and Express to perform basic arithmetic operations such as addition, subtraction, multiplication, and division through a REST API.

**Prerequisites**

Node.js

Git

Visual Studio Code

**Installation and Setup**

1. Clone the Repository

   git clone https://github.com/s224280593/sit737-2025-prac4p
   
   cd sit737-2025-prac4p

2. Install Dependencies

   npm init -y

   npm install express

   npm install winston

3. Run the Microservice

   node index.js

The microservice will start on port 3000.

**API Endpoints**

Addition: GET /add?num1=5&num2=3

Subtraction: GET /subtract?num1=5&num2=2

Multiplication: GET /multiply?num1=5&num2=3

Division: GET /divide?num1=5&num2=2
