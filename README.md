# Angular With RxJS

The need for reactive programming rises when building reactive systems. Reactive programming follows the core principles of the Reactive Manifesto. The principles can be stated as follows.

1. Responsive – A reactive system is able of providing a high-quality service by able of providing rapid and consistence response times.
2. Resilient – A reactive system is able of recovering from failures. This is achieved by replication, containment, isolation, and delegation.
3. Elastic – A reactive system is responsive to heavy workload.
4. Message-driven – Components communicate with each other by relying on asynchronous message passing.

If you are a software engineer like myself, you may be familiar with the above terminologies and can provide examples of how the above core principles are achieved. But the question here is, Only having the reactive architecture without reactive programming in the development phase. Does it make the system reactive? 

Angular is a JavaScript framework written in TypeScript. And JavaScript is a single-thread language. And imperative style programming always leads to blocking behavior. In simple terms, a thread is blocked by the code statement until it is finished executing.  But in Reactive programming paradigm uses a none blocking event-driven approach that can utilize the  single-thread for best performance.

This project demonstrates how angular with RxJS can be used to build application functionality in a reactive way.
First, I have created the following video functionality with imperative programming. The code can be found in branch: imperative-style. Then the same functionality has been refactored to reactive programming. The code can be found in branch: main.

Ex: Grid display functionality (Home page)

Imperative programming
[https://github.com/thilinawishvekeerthi/angular-rxjs/tree/imperative-style/src/app/home](https://github.com/thilinawishvekeerthi/angular-rxjs/tree/imperative-style/src/app/home)

Reactive Programming	
[https://github.com/thilinawishvekeerthi/angular-rxjs/tree/imperative-to-reactive-programming/src/app/home](https://github.com/thilinawishvekeerthi/angular-rxjs/tree/imperative-to-reactive-programming/src/app/home)

### Prerequisites

Prerequisities needed to start the project 
* node : v16.16.0
* npm : 8.11.0
* Angular: 13
 
  
### Local Setup

1.  Clone the repo
   ```sh
   git clone git@github.com:thilinawishvekeerthi/angular-rxjs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start node server. node serve will be acting as the back end server
   ```sh
   npm run server
   ```
4. start angular application using npm start as proxy config is added
   ```sh
   npm run start
   ```
5. navigate 
   ```sh
   http://localhost:4200/
   ```



https://user-images.githubusercontent.com/93445761/179438896-396f9bcb-a724-4c13-9819-275911854c09.mov






