class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

let car2 = new Car("asghar", 1992)

const prop = 'name'

car2.name
car2[prop]
car2['name']

function add(a, b) {
    return a + b
}

// arrow function
add = (a, b) => {return a + b};

add(12, 13)


