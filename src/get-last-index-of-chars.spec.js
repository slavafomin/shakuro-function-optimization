
const expect = require('chai').expect;

const getCharLastIndex = require('./get-last-index-of-chars');


describe('getCharLastIndex()', () => {

  it('should return -1 on empty string input', () => {

    expect(getCharLastIndex('', 'A', 'B')).to.equal(-1);

  });

  it('should return -1 when no chars are passed to it', () => {

    expect(getCharLastIndex('foo')).to.equal(-1);

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
        expect(getCharLastIndex('ABCDEFGHIJ', test[0], test[1])).to.equal(test[2]);
      });
    }

  });

});
