const assert = require('assert');
const { date_calc } = require('../date_calc.js');

describe('date_calc', function () {
  
  it('should count days properly', function () {
    assert.equal(date_calc("01/02/2019", "01/02/2019"), 0);
    assert.equal(date_calc("01/02/2019", "02/02/2019"), 0);
    assert.equal(date_calc("29/12/2019", "04/01/2020"), 5);
    assert.equal(date_calc("01/02/2019", "13/03/2019"), 39);
    assert.equal(date_calc("02/06/1983", "22/06/1983"), 19);
    assert.equal(date_calc("04/07/1984", "25/12/1984"), 173);
    assert.equal(date_calc("03/01/1989", "03/08/1983"), 1979);
  });

  it('should detect invalid date formats', function () {
    assert.equal(date_calc("01/00/2019", "13/03/2019"), -1);
    assert.equal(date_calc("02/13/1983", "22/06/1983"), -1);
    assert.equal(date_calc("04/07/1984", "00/12/1984"), -1);
    assert.equal(date_calc("03/01/1989", "32/08/1983"), -1);
  });
});