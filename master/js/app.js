// What is a function?
// A function is a block of code that is generally run multiple times easily.

// Why use functions?
// we want to write DRY code



// A function is a block of code that is generally run multiple times.




const helloWorld = () => {
  console.log("Hello World")
}

// What happens when we run this code?
// nothing because this is a statement like

const joe = "Teachers Pet"

// when we run this we are not doing anything but declaring the value of joe
// when we want to run this code we would invoke it by...

console.log(joe)

// when we write the function helloWorld all we are doing is saying, this is what happens when we run this code block.

// to call or invoke a function we call the function name "helloWorld" and ()

helloWorld()

// What do you think this will do?

// congrats you just built you first function!

// How do you think functions could be useful?

// lets say you want to welcome a user to your website
// how would we do this?

const welcome = () => {
  console.log('Welcome, User.')
  console.log('It is very nice to meet you User')
}
// how would we run this code block?

welcome()

// This is a very informal introduction don't you think?
// lets make it a little more personal

// what do you think the ()'s are for?
// they hold a value or properly know as a parameter

// we start by adding a parameter inside the first set of ()'s

const sayHi = (name) => {
  console.log(`Welcome, ${name}`)
  console.log(`It is very nice to meet you ${name}`) // notice that if you write it this way you must use backticks(``)
  console.log("========================================")
  console.log("Welcome, " + name + ".")
  console.log("It is very nice to meet you " + name + ".")
}

// to call the function we start the same way
// we then add a name into the ()'s

//sayHi(jim)

// why didn't this work?
// the value Joe was never declared. we need to pass the parameter as a string!

sayHi("jim")

// what else can do?
// lets add some numbers

const addNumbers = (num1, num2) => {
    sum = num1 + num2
    return sum
}

addNumbers(2,5)


// where is the answer?

// to see the answer this is what we can do.

console.log(addNumbers(2,5))




const floorButton = (floorNumber) => {
  if (floorNumber == 1 ){
    console.log("Ground Floor")
  }else if (floorNumber == 2 ){
    console.log("General Studies Floor")
  }else if (floorNumber == 3 ){
    console.log("Teachers Lounge")
  }else {
    console.log("floor does't exist");
  }
}

floorButton(1)

floorButton(3)
floorButton(4)














//end
