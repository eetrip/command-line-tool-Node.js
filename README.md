# Command Line Interface 

This is a basic command line interface made using node and mongodb


### Prerequisites

You need to have mongodb installed on your computer and should be running as a service.

you need to have globally installed node.js on your computer.


## Install

copy the code and paste it in an IDE the run the commands in the terminal(in the same directory where you saved the code)
* [npm init -y]
* [npm install mongodb commander]


## Running the tests

to add a customer run the command
* [node index.js add <firstname> <lastname> <phone> <email>]

to view a customer run the command
* [node index.js find <firstname>]

to view all customers run the command 
* [node index.js list]

to update a customer entry run the command
* [node update <firstname>]
* [<firstname> <lastname> <phone> <email>]

to delete a customer run the command
* [node delete <firstname>]


## Built With

* [Node.js](https://nodejs.org/en/download/) - The JavaScript runtime environment
* [MongoDB](https://www.mongodb.com/download-center) - The database used
* [Visual Studio Code](https://code.visualstudio.com/download) - The IDE used to build this project