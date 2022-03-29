const User = require('./user');

describe('User', () => {
  it('returns a name', () => {
    const sut = new User('Diego');
    expect(sut.getName()).toBe('Diego')
  });  

  it('introduces the user by name', () => {
    const sut = new User('Diego');
    expect(sut.getIntroduction()).toBe('Hi, my name is Diego')
  });
});
