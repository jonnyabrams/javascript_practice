const searchCandies = require('./searchCandies');



describe('searchCandies', () => {
  it('returns all candies beginning with A costing less than £5', () => {
    expect(searchCandies(5, 'A')).toEqual(['Aero'])
  });  
  it('returns all candies beginning with Ma costing less than £2', () => {
    expect(searchCandies(2, 'Ma')).toEqual(['Mars'])
  });
  it('returns all candies beginning with S costing less than £10', () => {
    expect(searchCandies(10, 'S')).toEqual(['Skitties', 'Skittles', 'Starburst'])
  });
  it('works with lower case letters', () => {
    expect(searchCandies(10, 's')).toEqual(['Skitties', 'Skittles', 'Starburst'])
  });
  it('works with two lower case letters', () => {
    expect(searchCandies(10, 'sk')).toEqual(['Skitties', 'Skittles'])
  });
});
