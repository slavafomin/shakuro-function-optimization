
const expect = require('chai').expect;

const getLastIndexOfChars = require('./get-last-index-of-chars');


describe('getLastIndexOfChars()', () => {

  it('should return -1 on empty string input', () => {

    expect(getLastIndexOfChars('', 'A', 'B')).to.equal(-1);

  });

  it('should return -1 when no chars are passed to it', () => {

    expect(getLastIndexOfChars('foo')).to.equal(-1);

  });

  it('should return correct result when single char is passed to it', () => {

    expect(getLastIndexOfChars('ABC', 'B')).to.equal(1);

  });

  describe('should return correct results', () => {

    const tests = [
      ['F', 'D',  5],
      ['D', 'F',  5],
      ['K', 'B',  1],
      ['K', 'A', -1],
      ['K', 'J',  9],
      ['B', 'K',  1],
      ['A', 'K', -1],
      ['J', 'K',  9],
      ['F', 'F',  5],
      ['B', 'I',  8],
      ['K', 'K', -1]
    ];

    for (const test of tests) {
      it(`${test[0]}, ${test[1]} === ${test[2]}`, () => {
        expect(getLastIndexOfChars('ABCDEFGHIJ', test[0], test[1])).to.equal(test[2]);
      });
    }

  });

});
