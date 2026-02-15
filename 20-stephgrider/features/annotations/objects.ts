const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};


// destructuring requires annotations for object properties
const { age, name }: { age: number; name: string } = profile;
// versus this
// const { age, name } = profile;

// same here; instead of 
// const { coords: {lat, lng }} = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
