const User = require('./user');
const UserBase = require('./userBase');

describe('UserBase', () => {
  it('counts the users', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.count()).toBe(3)
  });  

  it('returns array of user names', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.getNames()).toStrictEqual(['Uma', 'Josh', 'Ollie'])
  });

  it('returns an array introducing each user by name', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const sut = new UserBase(users);
    expect(sut.getIntroductions()).toStrictEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
  });
});