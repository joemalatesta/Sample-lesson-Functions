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


## Why do we use Functions?

Using functions is another application of "DRY" coding

Don't Repeat Yourself

In a function, you can store blocks of code that can be run in a program as many times as you wish.


## Declaring a Function

When writing a function you should always use **const**, if you ever have to rename a function then it probably shoudn't be a function.

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


## Functions with Parameters

When writing the function after the Function name but before the arrow function (=>), in the parentheses is where you would put the parameter.
in this example, the parameter is name.

```javascript
const sayHi = (name) => {
  console.log(`Welcome, ${name}`)
  console.log(`It is very nice to meet you ${name}`)

  You can also concatenate your console.log like This...

  console.log(`Welcome, ` + name + ".")
  console.log(`It is very nice to meet you ` + name + ".")

}
```

**Remember** When using the ${name} you must use backticks.



## Adding an Argument


How do we put a name into the sayHi function?
It's as easy as putting into the parentheses when you invoke the function.
The variable inside the parentheses is called a parameter. When you invoke the function and add a name into it, that name is called the Argument.
 Let's go ahead and try to add Beth as an Argument.


```javascript

const sayHi = (name) => {
  console.log(`Welcome, ${name}`)
  console.log(`It is very nice to meet you ${name}`)
}

sayHi(Beth)

```

Why didn't this work?

**remember** When using strings they must be in quotes.

```javascript

sayHi("Beth")
```



## Multiple Parameters

You can put multiple parameters into a function.
Let's go ahead and start one.

```javascript
const addNumbers = (num1, num2) => {
    sum = num1 + num2
    return sum
}

addNumbers(2,5)
```
**Notice that you do not need to add quotes to numbers**
This is also true with variables and booleans.

Let's run this code and see what we come up with.

Where is the answer?

A return will send the answer back to where the function was called.
So if we want to see the answer in the console we would call the function inside a console.log like this...

```javascript

console.log(addNumbers(2,5))
```



## Exercise

Lets try to write a couple of Functions

1. Create a function that console logs a numbers square

1. Create a function that when invoked will console log "My name is <your name here> , and I have lived in <number> of states growing up"

1. Create a function that adds 2 numbers then divides them by 2.
