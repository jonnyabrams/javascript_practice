const User = require('./user');

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(user => user.getName()
      );
  }

  getIntroductions() {
    return this.users.map(user => `Hi, my name is ${user.getName()}`
      );
  }
}

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const blg = new UserBase(users);

// console.log(blg.getIntroductions());

module.exports = UserBase;