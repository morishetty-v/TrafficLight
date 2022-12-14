

## Overview
In this activity, you will do a simple example to help you recognize failure of the five code-level design principles 

### Step 0: Getting started
Run `npm install` to download the dependencies for this project, and then open it in your IDE of choice. 
Run `npm run test` to run the tests of the existing code (or run the script in VSC).  You will see that the tests pass.

### The Problem

Your team is writing a simulator for a traffic light in a large city.  Whitley, an intern in your group, has written the code in TrafficLight.ts, and the tests in TrafficLight.test.ts

Your team leader, Adrian, has asked you to critique Whitley's code based on the Five Code-Level Design Principles.  Adrian says that he has already received some feedback from the client, who complained that not all traffic lights change every 20 seconds (indeed, the times for red, yellow, and green may all be different, and may be different at different intersections.)

### Part 1: Critique Whitley's code.

In a text file, list several ways in which Whitley's code violates the 5 Principles.

1. Color variable can be more specific by calling it TrafficColor
2. Dont hardcode the timer
3. Hard to add green arrows without a class

### Part 2: Improve Whitley's code

Write a new file, called betterTrafficLight.ts, which solves the same problem while adhering better to the 5 Principles.  Test your code by changing TrafficLight.test.ts to import 

### Part 3: Critique your own code

Now look at your own code.  Based on your experience with traffic lights, what assumptions does your code make about the behavior of traffic lights in a large city?  In what ways is the client likely to be unhappy with the assumptions you made?  (Stretch goal: how could you redesign your code to make it more flexible?)

The code assumes that there are only three traffic light color and that there are no arrows for green lights. They would be unhappy in the fact that you can't currently add arrows for green lights or have a fourth option for timeToGreenArrow as some traffic lights will have that. To redesign the code we would add another variable for green arrows and the time it takes to switch to and from the arrows.