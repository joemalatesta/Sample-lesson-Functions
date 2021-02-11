# Functions

## Lesson objectives

_After this lesson students will be able to:_

1. Why do we use Functions, and what are the benefits of them
1. How to Declare a Function
1. How to Invoke a Function


## Setup

In `student_examples` for today, make a file `functions.js`

Test that a console.log will appear in Terminal when you run the file.


```
$ node functions.js
```

## What is a Function?

A Function is a block of code that does something using a key word to start it.

## Why do we use Functions?

Using functions is another application of "DRY" coding

Don't Repeat Yourself

In a function, you can store blocks of code that can be run in a program as many times as you wish.


## Declaring a Function

This is the basic template of a function

const **(always use const when starting a function)** <function name> = (**for a parameter**) => (**this is the arrow function**) {
	**block of code that is run when the function is invoked**
}

When writing a function you should always use **const**, if you ever have to rename a function then it probably shouldn't be a function.

To declare a Function start with "const". Then you would use a variable name. This name should describe what this function does. Functions do things, so a verb and a describing word are often used as name.

```javascript
const printHelloWorld = () => {
	console.log('Hello World')
}
```

We have now declared helloWorld as a function. This will not have any effect until it is **Invoked**.


## Invoke a function

To Invoke a function simply use the name of the function and use parentheses to invoke the function.

```javascript
printHelloWorld()
```

If the parentheses are not included, the function will not run.

When you create a function make sure to create it before you invoke it!!

For example:


**This will not run!**

```javascript
helloWorld()

const helloWorld = () => {
	console.log('helloWorld')
}
```

**This is correct**

```javascript
const helloWorld = () => {
	console.log('helloWorld')
}
helloWorld()

```


### Exercise

* Write a function `myFirstFunction` that will console.log `This is my first function`
