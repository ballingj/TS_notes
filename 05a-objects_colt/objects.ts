// Objects as parameters:
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
  }
  
  printName({ first: "Thomas", last: "Jenkins" });
  
  // age and isAlive is not part of function definition, but TA allows this
  const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
  printName(singer);
  
  // let coordinate: { x: number; y: number } = { x: 34, y: 2 };
  
  // function randomCoordinate(): { x: number; y: number } {
  //   return { x: Math.random(), y: Math.random() };
  // }
  
  // function doublePoint(point: { x: number; y: number }): {
  //   x: number;
  //   y: number;
  // } {
  //   return { x: point.x * 2, y: point.y * 2 };
  // }
  
  // type Point = {
  //   x: number;
  //   y: number;
  // };
  
  let coordinate: Point = { x: 34, y: 2 };
  
  function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
  }
  
  function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
  }
  
  type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
  };
  
  function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
  }
  
  function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
  }
  
  const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
      producer: "Phil Spector",
      writer: "Alex North",
    },
  };
  
  const earnings = calculatePayout(mySong);
  console.log(earnings);
  printSong(mySong);
  

  // optional variable 
  type Point = {
    x: number;
    y: number;
    z?: number;
  };
  
  const myPoint: Point = { x: 1, y: 3 };
  

  // readonly properties
  type User = {
    readonly id: number;
    username: string;
  };
  
  const user: User = {
    id: 12837,     // <- can assign initially
    username: "catgurl",
  };
  
  console.log(user.id);
  user.id;
  

  // intersection type
  type Circle = {
    radius: number;
  };
  
  type Colorful = {
    color: string;
  };
  
  type ColorfulCircle = Circle & Colorful;
  
  const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
  };
  
  type Cat = {
    numLives: number;
  };
  type Dog = {
    breed: string;
  };
  
  type CatDog = Cat &
    Dog & {
      age: number;
    };
  
  const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9,
  };
  