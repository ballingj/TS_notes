const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// traditional function syntax
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function works the same way
const multiply = function(a: number, b: number): number {
  return a * b;
};

// void is nothing returned
const logger = (message: string): void => {
  console.log(message);
};

// this could be defined as returning never, but avoid it
// use void; never means the function never ends
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date; weather: string;}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
